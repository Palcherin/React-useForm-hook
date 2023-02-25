
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';


export const Form=()=>{
   

    const schema = yup.object().shape({
        fullName:yup.string().required("full name required"),
        email:yup.string().email().required(),
        Age:yup.number().positive().integer().min(18).required(),
        password:yup.string().min(4).max(10).required(),
        confirmPassword:yup.string().oneOf([yup.ref("password"),null] , "passwords dont match").required()
    });
const {register, handleSubmit, formState:{errors}}=useForm({
    resolver: yupResolver(schema)  
});

    const onSubmit=(data)=>{
        console.log(data)
        
    }
    return(
        
        <form className="form " onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name..." {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email..."{...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="number" placeholder="Age..."{...register("Age")}/>
            <p>{errors.password?.message}</p>
            <input type="text" placeholder="Password..."{...register("password")}/>
            <p>{errors.password?.message}</p>
            <input type="text" placeholder="Confirm Password..."{...register("confirmPassword")}/>
            <p>{errors.confirmPassword?.message}</p>
            <input type="submit" />
        </form>
    );

};