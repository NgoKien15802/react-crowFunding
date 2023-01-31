import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, ButtonGoogle } from "~/components/button";
import FormGroup from "~/components/common/FormGroup";
import { Input } from "~/components/input";
import { Label } from "~/components/label";
import * as yup from "yup";
import LayoutAuthentication from "~/layout/LayoutAuthentication";
import { yupResolver } from "@hookform/resolvers/yup";
import useToggleValue from "~/hooks/useToggleValue";
import { IconEyeToggle } from "~/components/icons";

const schema = yup.object({
    email: yup.string().email("").required("This field is required"),
    password: yup
        .string()
        .min(8, "Password must be 8 characters")
        .required("This field is required"),
});

const SingInPage = () => {
    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const { value: showPassword, handleToggleValue: handleTogglePassword } =
        useToggleValue();

    const handleSignIn = (values) => {
        console.log(values);
    };
    return (
        <LayoutAuthentication heading="Welcome Back!">
            <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
                Don't have an account?{"  "}
                <Link
                    to={"/sign-up"}
                    className="font-medium underline text-primary"
                >
                    Sign up
                </Link>
            </p>
            <ButtonGoogle text="Sign in with google"></ButtonGoogle>
            <form onSubmit={handleSubmit(handleSignIn)}>
                <FormGroup>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                        control={control}
                        name="email"
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
                <FormGroup>
                    <div className="text-right">
                        <span className="inline-block text-sm font-medium text-primary">
                            Fogot password
                        </span>
                    </div>
                </FormGroup>
                <Button type="submit" className="w-full bg-primary">
                    Sign in
                </Button>
            </form>
        </LayoutAuthentication>
    );
};

export default SingInPage;
