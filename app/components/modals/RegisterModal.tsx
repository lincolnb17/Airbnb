'use client'
import  {AiFillGithub} from 'react-icons/ai'
import {FcGoogle} from "react-icons/fc"
import { useCallback,useState } from 'react'
import {
    Field,
    FieldValue,
    SubmitHandler,
    useForm
} from 'react-hook-form';

import useRegisterModal from '../hooks/useRegisteModal';
import axios from 'axios';
import Modal from './Modal';
import Heading from '../Heading';


const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading,setIsLoading]=useState(false);
    const{
        register,
        handleSubmit,
        formState:{
            errors,
        } 
    }= useForm <FiledValue>({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    });
    const onSubmit: SubmitHandler<FieldValue>= (data)=>{
        setIsLoading(true);
        axios.post('api/register',data)
        .then(()=>{
            RegisterModal.onClose();
        })
        .catch((error)=>{
            console.log(error)

        })
        .finally(()=>{
            setIsLoading(false);
        })
    }
    const bodyContent=(
        <div className="flex flex-col gap-4">
        <Heading
          title="Welcome to Airbnb"
          subtitle="Create an account!"
        />
        
      </div>    
    )
  return (
    <Modal
    disabled={isLoading}
    isOpen={registerModal.isOpen}
    title='Register'
    actionLabel='Continue'
    onClose={registerModal.onClose}
    onSubmit={handleSubmit(onSubmit)}
    body={bodyContent}
    />
  )
}

export default RegisterModal