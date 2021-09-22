import { Button, IconButton } from '@chakra-ui/button';
import { FormLabel } from '@chakra-ui/form-control';
import { AddIcon } from '@chakra-ui/icons';
import { Stack, Box } from '@chakra-ui/layout';
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter } from '@chakra-ui/modal';
import { Input, InputGroup, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Textarea, useToast } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { Controller, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { addReview } from '../utils/mutations/review';
import { Review } from '../models/review';
import { v4 as uuidv4 } from 'uuid';
import { useQueryClient } from 'react-query';

export interface AddReviewProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface ReviewFormInputs {
  fullName: string;
  review: string;
  rating: number;
}

const AddReview: React.FC<AddReviewProps> = ({ isOpen, onOpen, onClose }) => {
  const AddReviewButton = styled(IconButton)`
    position: fixed;
    top: 38rem;
    left: 85rem;
  `;

  const queryClient = useQueryClient();
  const toast = useToast();
  const { handleSubmit, register, control, reset } = useForm<ReviewFormInputs>();
  const onSubmit: SubmitHandler<ReviewFormInputs> = (data) => {
    const payload: Review = {
      author: data.fullName,
      body: data.review,
      rating: data.rating,
      publishDate: new Date().toISOString(),
      id: uuidv4(),
    };
    const response = addReview(payload);

    if (response.success) {
      queryClient.invalidateQueries('reviews');
      onClose();
      toast({
        description: response.message,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
      reset({ fullName: '', review: '', rating: 5 });
    }
  };

  const onError: SubmitErrorHandler<ReviewFormInputs> = (error) => {
    console.error(error);
    toast({
      description: 'Please provide your name, review, and rating',
      status: 'error',
      duration: 3000,
      isClosable: true,
      position: 'top',
    });
  };

  return (
    <div>
      <AddReviewButton aria-label='Add review' colorScheme='yellow' icon={<AddIcon />} onClick={onOpen} />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Add a review
          </DrawerHeader>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="fullName">Name</FormLabel>
                  <Input
                    id="fullName"
                    defaultValue=''
                    {...register('fullName', { required: true })}
                    placeholder="Please enter first and last name"
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="review">Review</FormLabel>
                  <InputGroup>
                    <Controller
                      name='review'
                      control={control}
                      defaultValue=''
                      rules={{ required: true, maxLength: 140 }}
                      render={({ field }) =>
                        <Textarea
                          {...field}
                          placeholder="Please add a review"
                          size="sm"
                        />
                      }
                    />
                  </InputGroup>
                </Box>

                <Box>
                  <FormLabel htmlFor="rating">Rating</FormLabel>
                  <Controller
                    name='rating'
                    control={control}
                    defaultValue={5}
                    rules={{ required: true, max: 5, min: 0 }}
                    render={({ field }) =>
                      <NumberInput {...field} min={0} max={5}>
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    }
                  />
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="yellow" type='submit'>Submit</Button>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>

    </div>
  );
}

export default AddReview;