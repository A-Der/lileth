import React from "react";
import { useForm } from "react-hook-form";
import { createPost } from "../../_actions/posts";
import { useDispatch } from "react-redux";

export default function Form() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(createPost(data));
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            name="author"
            placeholder="Author"
            {...register}
          />
        </div>
        <div>
          <input type="text" name="title" placeholder="Title" {...register} />
        </div>
        <div>
          <input
            type="text"
            name="article"
            placeholder="article"
            {...register}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
