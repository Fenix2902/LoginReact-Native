import { View, Text } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button } from 'react-native-paper';

export default function HomeScreen({navigation, route}) {
  const {
    control,
    handleSubmit, reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      iduser: "",
      fullname: "",
      email: "",
      password: "",
      uri: "",
      age: ""
    },
  })
  const onSubmit = (data) => console.log(data);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>Bienvenid@ {route.params.email}</Text> */}
      {/* controlador id */}
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength:12,
          minLength:4,
          pattern: /^[0-9]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Identificación"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="iduser"
      />
      {errors.iduser?.type == "required" && <Text style={{color:'red'}}>Id del usuario es obligatori</Text>}
      {errors.iduser?.type == "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 12 chars.</Text>}
      {errors.iduser?.type == "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 4 chars.</Text>}
      {errors.iduser?.type == "pattern" && <Text style={{color:'red'}}>Debe ingresar solo numeros</Text>}
          {/* controlador fullName */}
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength:30,
          minLength:3,
          pattern: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{marginTop:10}}
            label="Nombre Completo"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullname"
      />
      {errors.fullname?.type == "required" && <Text style={{color:'red'}}>Nombre completo es obligatori</Text>}
      {errors.fullname?.type == "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 30 chars.</Text>}
      {errors.fullname?.type == "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 3 chars.</Text>}
      {errors.fullname?.type == "pattern" && <Text style={{color:'red'}}>Debe ingresar solo letras y/o espacios</Text>}

{/* controlador Email */}
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength:60,
          minLength:15,
          pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{marginTop:10}}
            label="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email?.type == "required" && <Text style={{color:'red'}}>Correo es obligatorio</Text>}
      {errors.email?.type == "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 60 chars.</Text>}
      {errors.email?.type == "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 15 chars.</Text>}
      {errors.email?.type == "pattern" && <Text style={{color:'red'}}>Debe ingresar solo letras y/o espacios</Text>}

      {/* controlador de password */}
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength:6,
          minLength:6,
          pattern: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={{marginTop:10}}
            label="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password?.type == "required" && <Text style={{color:'red'}}>Password es obligatorio</Text>}
      {errors.password?.type == "maxLength" && <Text style={{color:'red'}}>La longitud debe ser hasta 6 chars.</Text>}
      {errors.password?.type == "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 6 chars.</Text>}
      {errors.password?.type == "pattern" && <Text style={{color:'red'}}>Debe ingresar solo letras y/o espacios</Text>}

      <Button
          style={{ marginTop: 20, backgroundColor: 'powderblue' }}
          icon="content-save"
          mode="outlined"
          onPress={handleSubmit(onSubmit)}
          >
            Guardar
          </Button>
      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
  );
  }