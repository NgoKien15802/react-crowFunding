import useToggleValue from "~/hooks/useToggleValue";
import React from "react";
import LayoutAuthentication from "~/layout/LayoutAuthentication";
import Label from "~/components/label/Label";
import Input from "~/components/input/Input";
import FormGroup from "~/components/common/FormGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Checkbox } from "~/components/checkbox";
import { Button, ButtonGoogle } from "~/components/button";
import { IconEyeToggle } from "~/components/icons";

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

    const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
        useToggleValue();

    const { value: showPassword, handleToggleValue: handleTogglePassword } =
        useToggleValue();

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
            <ButtonGoogle></ButtonGoogle>
            <p className="mb-4 text-xs font-normal text-center dark:text-white lg:text-sm lg:mb-8 text-text2 ">
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
                        type={`${showPassword ? "text" : "password"}`}
                        placeholder="Enter your password..."
                        error={errors?.password?.message}
                    >
                        <IconEyeToggle
                            open={showPassword}
                            onClick={handleTogglePassword}
                        ></IconEyeToggle>
                    </Input>
                </FormGroup>
                <div className="flex items-start mb-5 gap-x-5">
                    <Checkbox
                        name="term"
                        checked={acceptTerm}
                        onClick={handleToggleTerm}
                    >
                        <p className="flex-1 text-xs dark:text-text3 lg:text-sm text-text2">
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
