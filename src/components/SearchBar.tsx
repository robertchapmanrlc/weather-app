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

export default function SearchBar() {
  return <input type="text" placeholder="Enter Location" className="w-[40%] h-10 bg-black/25 rounded-md text-white text-xl placeholder:text-white/50" />
}
