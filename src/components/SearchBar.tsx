// import { TextField, Container } from "@mui/material";
// import { useForm } from "react-hook-form";

// type FormValues = {
//   city: string;
// };

// interface Props {
//   getWeatherData: (location: string) => void;
// }

// function SearchBar({ getWeatherData } : Props) {
//   const form = useForm<FormValues>({
//     defaultValues: {
//       city: "",
//     },
//   });

//   const { register, handleSubmit, formState } = form;

//   const { errors } = formState;
//   const onSubmit = (data: FormValues) => {
//     getWeatherData(data.city);
//   };

//   return (
//     <>
//       <Container sx={{ marginTop: "20px" }}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <TextField
//             label="City"
//             {...register("city", { required: "City name is required" })}
//             error={!!errors.city}
//             helperText={errors.city?.message}
//             sx={{minWidth: 400}}
//           ></TextField>
//         </form>
//       </Container>
//     </>
//   );
// }

// export default SearchBar;

"use client";

import Image from "next/image";
import SearchIcon from "../assets/Search Icon.svg";
import { useState } from "react";

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div
      className={`w-[40%] h-10 px-4 bg-black ${
        !isFocused && "bg-opacity-25"
      } flex rounded-md transition-all duration-300`}
    >
      <Image width={20} height={20} src={SearchIcon} alt="Search Icon" />
      <input
        type="text"
        placeholder="Enter Location"
        className="w-full h-full bg-transparent pl-3 text-white/50 text-xl placeholder:text-white/50 outline-none transition-all duration-300 focus:text-white"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}
