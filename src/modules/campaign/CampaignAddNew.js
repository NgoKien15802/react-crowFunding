import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import FormGroup from "~/components/common/FormGroup";
import FormRow from "~/components/common/FormRow";

import ImageUploader from "quill-image-uploader";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Dropdown, List, Option } from "~/components/dropdown";
import { Select } from "~/components/dropdown";
import { Input, Textarea } from "~/components/input";
import { Label } from "~/components/label";
import axios from "axios";
import { useState } from "react";
Quill.register("modules/imageUploader", ImageUploader);

const CampaignAddNew = () => {
    const { handleSubmit, control } = useForm();
    const [content, setContent] = useState();
    const handleAddNewCampaign = (values) => {
        console.log(values);
    };
    const modules = useMemo(
        () => ({
            toolbar: [
                ["bold", "italic", "underline", "strike"],
                ["blockquote"],
                [{ header: 1 }, { header: 2 }], // custom button values
                [{ list: "ordered" }, { list: "bullet" }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ["link", "image"],
            ],
            imageUploader: {
                // // imgbbAPI
                // upload: async (file) => {
                //     const bodyFormData = new FormData();
                //     bodyFormData.append("image", file);
                //     const response = await axios({
                //         method: "post",
                //         url: "https://api.imgbb.com/1/upload?key=63e6cd3f1f92682cb805d54a8f2cbd96",
                //         data: bodyFormData,
                //         headers: {
                //             "Content-Type": "multipart/form-data",
                //         },
                //     });
                //     return response.data.data.url;
                // },
            },
        }),
        []
    );
    return (
        <div className="bg-white rounded-xl py-10 px-[66px]">
            <div className="text-center">
                <h1 className="py-4 mb-10 rounded-lg px-14 bg-text4 bg-opacity-5 font-bold text-[25px] inline-block">
                    Start a campaign 🚀
                </h1>
                <form action="" onSubmit={handleSubmit(handleAddNewCampaign)}>
                    <FormRow>
                        <FormGroup>
                            <Label className="text-left">
                                Campiagn title *
                            </Label>
                            <Input
                                control={control}
                                name="title"
                                placeholder="Writer a title"
                            ></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label className="text-left">
                                Select a category *
                            </Label>
                            <Dropdown>
                                <Select placeholder="Select the category"></Select>
                                <List>
                                    <Option>Architecture</Option>
                                    <Option>Crypto</Option>
                                </List>
                            </Dropdown>
                        </FormGroup>
                    </FormRow>
                    <FormGroup>
                        <Label className="text-left">Short Description *</Label>
                        <Textarea
                            control={control}
                            name="short_description"
                            placeholder="Write a short description"
                        ></Textarea>
                    </FormGroup>
                    <FormGroup>
                        <Label className="text-left">Story *</Label>
                        <ReactQuill
                            placeholder="Write your story..."
                            theme="snow"
                            value={content}
                            onChange={setContent}
                            modules={modules}
                        />
                    </FormGroup>
                </form>
            </div>
        </div>
    );
};

export default CampaignAddNew;
