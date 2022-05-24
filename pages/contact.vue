<script setup>
import { ref, computed } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'


const router = useRouter()
const { create } = useStrapi4()
const title = ref('Contact Me')
const submitted = ref(false)

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    phone: yup.string().required(),
    country: yup.string().required(),
    message: yup.string().required(),
})

const formValues = {
    name: 'emma',
    email: 'emma@gmail.com',
    phone: '+234 xxx xxx xxxx',
    country: 'NG',
    message: 'API Testing',

}

const { handleSubmit, submitCount, isSubmitting } = useForm({
    // initialValues: formValues,
    validationSchema: schema
})

const onSubmit = handleSubmit(values => {
    try {
        create('messages', {
             name: values.name,
             email: values.email,
             phone: values.phone,
             country: values.country,
             message: values.message,
             })
        //  console.log(values)
         submitted.value = true
    } catch(error) {
        // console.log(error)
    }
    setTimeout(() => { router.push('/') }, 3000)
})

const isTooManyAttempts = computed(() => {
    return submitCount.value >= 3
})

const { value: name, errorMessage: nameError } = useField('name')
const { value: email, errorMessage: emailError } = useField('email')
const { value: phone, errorMessage: phoneError } = useField('phone')
const { value: country, errorMessage: countryError } = useField('country')
const { value: message, errorMessage: messageError } = useField('message')

useHead({
    titleTemplate: '%s | Eneotu',
    title: title,
})

</script>
<template>
    <div class="md:container justify-center pt-10 mx-3">
        <div class="flex justify-center">
            <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-600">{{ title }}</h1>
        </div>

        <div class="flex justify-center text-primary m-1 mt-5">
            <form v-if="!isTooManyAttempts" @submit="onSubmit">
                <div v-show="submitted" class="alert shadow-lg mb-3">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Submitted: Thank You For Contacting Me</span>
                    </div>
                </div>

                <div class="form-control">
                    <label class="input-group">
                        <span class=" bg-accent w-28">Name</span>
                        <input type="text" v-model="name" placeholder="full name" class="input input-bordered border-accent md:w-96" />
                    </label>
                    <i class=" text-accent mb-3">{{ nameError }}</i>

                    <label class="input-group">
                        <span class=" bg-accent w-28">Email</span>
                        <input v-model="email" type="text" placeholder="email address" class="input input-bordered border-accent md:w-96" />
                    </label>
                    <i class=" text-accent mb-3">{{ emailError }}</i>

                    <label class="input-group">
                        <span class=" bg-accent w-28">Phone</span>
                        <input v-model="phone" type="text" placeholder="phone number" class="input input-bordered border-accent md:w-96" />
                    </label>
                    <i class=" text-accent mb-3">{{ phoneError }}</i>

                    <label class="input-group">
                        <span class=" bg-accent w-28">Country</span>
                        <input v-model="country" type="text" placeholder="country" class="input input-bordered border-accent md:w-96" />
                    </label>
                    <i class=" text-accent mb-3">{{ countryError }}</i>

                    <label class="input-group">
                        <span class=" bg-accent w-28">Message</span>
                        <textarea v-model="message" class="textarea textarea-bordered border-accent md:w-96" placeholder="message"></textarea>
                    </label>
                    <i class=" text-accent mb-3">{{ messageError }}</i>

                    <button type="submit" :disabled="isSubmitting" class="btn btn-outline btn-primary btn-block">send</button>

                </div>
            </form>
            <p v-else>Sorry but you have attempted to submit too many times</p>
        </div>

    </div>
</template>