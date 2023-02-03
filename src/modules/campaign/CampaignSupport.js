import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "~/components/button";
import { Input } from "~/components/input";

const CampaignSupport = () => {
    const { control } = useForm();
    return (
        <div>
            <h2 className="w-full px-6 mb-5 text-lg font-semibold bg-white shadow-1 py-7">
                Support
            </h2>
            <div className="w-full flex flex-col bg-white px-6 shadow-1 py-7">
                <p className="text-xl mb-8 text-text3 text-center">
                    Pledge without reward
                </p>
                <Input
                    placeholder="$10"
                    control={control}
                    name="pedge"
                    className="text-lg font-medium py-2 px-5 border border-strock w-full rounded mb-5"
                ></Input>
                <div className="p-5 bg-grayf3 rounded-xl mb-5">
                    <p className="text-text2 text-sm font-semibold mb-5">
                        Back it because you believe in it.
                    </p>
                    <p className="text-sm text-text3">
                        Support the project for no reward, just because it
                        speaks to you.
                    </p>
                </div>
                <Button kind="secondary">Continute</Button>
            </div>
        </div>
    );
};

export default CampaignSupport;
