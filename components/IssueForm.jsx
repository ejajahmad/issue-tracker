import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string(),
    image: yup.string(),
    image_url: yup.string(),
    priority: yup.string().required(),
    status: yup.string().required(),
    type: yup.string().required(),
    assignee: yup.string().required(),
    reporter: yup.string().required(),
  })
  .required();

export default function IssueForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form className="p-5 rounded-md flex flex-col gap-2 mx-auto w-8/12" onSubmit={handleSubmit(onSubmit)}>
      {/* Title */}
      <div>
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Title
        </label>
        <input
          type="text"
          id="title"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="e.g. This button is not working"
          {...register("title")}
        />
        <small className="text-red-500">{errors.title?.message}</small>
      </div>
      {/* Description */}
      <div>
        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Description
        </label>
        <textarea
          id="description"
          rows="3"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="e.g. When I click on this button, nothing happens."
          {...register("description")}
        ></textarea>
        <small className="text-red-500">{errors.description?.message}</small>
      </div>
      {/* Image */}
      <div>
        <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Image
        </label>
        <input
          type="file"
          id="image"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="e.g. When I click on this button, nothing happens."
          {...register("image")}
        />
        <small className="text-red-500">{errors.image?.message}</small>
      </div>
      {/* Image URl */}
      <div>
        <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Image URL
        </label>
        <input
          type="text"
          id="image"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="e.g. When I click on this button, nothing happens."
          {...register("image_url")}
        />
        <small className="text-red-500">{errors.image_url?.message}</small>
      </div>
      {/* Priority */}
      <div>
        <label for="priority" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Priority
        </label>
        <select
          id="priority"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          required
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <small className="text-red-500">{errors.priority?.message}</small>
      </div>
      {/* Status */}
      <div>
        <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Status
        </label>
        <select
          id="status"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          {...register("status")}
        >
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>
        <small className="text-red-500">{errors.status?.message}</small>
      </div>
      {/* Type */}
      <div>
        <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Type
        </label>
        <select
          id="type"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          {...register("type")}
        >
          <option value="bug">Bug</option>
          <option value="feature">Feature</option>
          <option value="enhancement">Enhancement</option>
        </select>
        <small className="text-red-500">{errors.type?.message}</small>
      </div>
      {/* Assignee */}
      <div>
        <label for="assignee" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Assignee
        </label>
        <select
          id="assignee"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          {...register("assignee")}
        >
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
          <option value="user3">User 3</option>
        </select>
        <small className="text-red-500">{errors.assignee?.message}</small>
      </div>
      {/* Reporter */}
      <div>
        <label for="reporter" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Reporter
        </label>
        <select
          id="reporter"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          {...register("reporter")}
        >
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
          <option value="user3">User 3</option>
        </select>
        <small className="text-red-500">{errors.reporter?.message}</small>
      </div>
      <button
        type="submit"
        class="mt-3 flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        Create
      </button>
    </form>
  );
}
