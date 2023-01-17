import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "~/components/button";
import { Checkbox } from "~/components/checkbox";
import FormGroup from "~/components/common/FormGroup";
import Input from "~/components/input/Input";
import Label from "~/components/label/Label";
import LayoutAuthentication from "~/layout/LayoutAuthentication";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required("This field is required"),
    email: yup
        .string()
        .email("Invalid email address")
        .required("This field is required"),
    password: yup
        .string()
        .min(8, "Password must be 8 characters")
        .required("This field is required"),
});

const SignUpPage = () => {
    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleSignUp = (values) => {
        console.log(values);
    };

    const [acceptTerm, setAcceptTerm] = useState(false);

    const handleToggleTerm = () => {
        console.log(acceptTerm);
        setAcceptTerm(!acceptTerm);
    };
    return (
        <LayoutAuthentication heading="SignUp">
            <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
                Already have an account?{"  "}
                <Link
                    to={"/sign-in"}
                    className="font-medium underline text-primary"
                >
                    Sign in
                </Link>
            </p>
            <button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border text-text2 border-strock rounded-xl gap-x-2">
                <img src="/google.png" alt="google" className="" />
                <span>Sign up with google</span>
            </button>
            <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 ">
                Or sign up with email
            </p>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <FormGroup>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                        control={control}
                        name="name"
                        placeholder="Enter your fullname..."
                        error={errors?.name?.message}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                        control={control}
                        name="email"
                        type="email"
                        placeholder="Enter your email..."
                        error={errors?.email?.message}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password *</Label>
                    <Input
                        control={control}
                        name="password"
                        type="password"
                        placeholder="Enter your password..."
                        error={errors?.password?.message}
                    ></Input>
                </FormGroup>
                <div className="flex items-start mb-5 gap-x-5">
                    <Checkbox
                        name="term"
                        checked={acceptTerm}
                        onClick={handleToggleTerm}
                    >
                        <p className="flex-1 text-sm text-text2">
                            I agree to the{" "}
                            <span className="underline text-secondary">
                                {" "}
                                Tearms of Use
                            </span>{" "}
                            and have read and understand the{" "}
                            <span className="underline text-secondary">
                                Privacy policy
                            </span>
                            .
                        </p>
                    </Checkbox>
                </div>
                <Button type="submit" className="w-full bg-primary">
                    Create my account
                </Button>
            </form>
        </LayoutAuthentication>
    );
};

export default SignUpPage;
