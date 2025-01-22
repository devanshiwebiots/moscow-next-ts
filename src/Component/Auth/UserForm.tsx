'use client';
import { CreateAccount, DontHaveAccount, EmailAddressLogIn, OrSignInWith, Password, RememberPassword, SignIn, SignInToAccount } from "@/Constant";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import imageOne from "../../../public/assets/images/logo/logo.png";
import imageTwo from "../../../public/assets/images/logo/logo_dark.png";
import { UserSocialApp } from "./UserSocialApp";
import toast from "react-hot-toast";

export const UserForm = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("Test123@gmail.com");
  const [password, setPassword] = useState("Test@123");
  const router = useRouter();

 
  const formSubmitHandle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/dashboard/ecommerce",
    });

    if (result?.ok) {
      toast.success("successfully Logged in");
      router.push(result.url || "/dashboard/ecommerce");
    } else {
      toast.error("Invalid Credentaial...");
    }
  };

  return (
    <div>
      <div>
        <Link className='logo' href={`/dashboard/default_dashboard`}>
          <img className='img-fluid for-light' src={imageOne.src} alt='login page' />
          <img className='img-fluid for-dark' src={imageTwo.src} alt='login page' />
        </Link>
      </div>
      <div className='login-main'>
        <Form className='theme-form' onSubmit={(event) => formSubmitHandle(event)}>
          <h4>{SignInToAccount}</h4>
          <p>Enter your email & password to login</p>
          <FormGroup>
            <Label className='col-form-label'>{EmailAddressLogIn}</Label>
            <Input type='email' defaultValue={email} onChange={(event) => setEmail(event.target.value)} placeholder='test123@gmail.com' />
          </FormGroup>
          <FormGroup>
            <Label className='col-form-label'>{Password}</Label>
            <div className='position-relative'>
              <Input type={show ? "text" : "password"} defaultValue={password} onChange={(event) => setPassword(event.target.value)} placeholder='Test@123' />
              <div className='show-hide' onClick={() => setShow(!show)}>
                <span className='show'> </span>
              </div>
            </div>
          </FormGroup>
          <FormGroup className='mb-0'>
            <div className='checkbox p-0'>
              <Input id='checkbox1' type='checkbox' />
              <Label className='text-muted' htmlFor='checkbox1'>
                {RememberPassword}
              </Label>
            </div>
            <div className='text-end mt-3'>
              <Button type='submit' color='primary' block>
                {SignIn}
              </Button>
            </div>
          </FormGroup>
          <h6 className='text-muted mt-4 or'>{OrSignInWith}</h6>
          <UserSocialApp />
          <p className='mt-4 mb-0 text-center'>
            {DontHaveAccount}
            <Link className='ms-2' href={`/authentication/registersimple`}>
              {CreateAccount}
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};
