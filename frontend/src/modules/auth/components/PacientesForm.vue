<script setup lang="ts">
type Genero = 'M' | 'F' | 'O';

interface Form {
    name: string;
    lastName: string;
    genero: Genero;
    personalId: string;
    address: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptCondition: boolean;

}
const active = ref(0);

const registerForm = reactive<Form>({
    name: '',
    lastName: '',
    genero: '',
    personalId: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptCondition: false,
});

const generos = ref([
    { name: 'Masculino', code: 'M' },
    { name: 'Femenino', code: 'F' },
    { name: 'Otros', code: 'O' }
]);
const register = () => {
    console.log('register');
}
</script>
<template>
    <div class="ml-[calc(50% - 187px)] flex items-center justify-center p-4">
        <div v-focustrap
            class="w-full card p-4 bg-white rounded-lg shadow-lg border-2 border-gray-1"
            style="max-width: 375px">
            <form @submit.prevent="register">
                <Stepper v-model:activeStep="active">
                    <StepperPanel>
                        <template #header="{ index, clickCallback }">
                            <button class="bg-transparent border-none inline-flex flex-column gap-2"
                                @click="clickCallback">
                                <span
                                    :class="['rounded-md border-2 w-8 h-8 inline-flex items-center justify-center', { ' text-white bg-green-500 border-green-500': index <= active, 'surface-border': index > active }]">
                                    <i class="pi pi-user"></i>
                                </span>
                            </button>
                        </template>
                        <template #content="{ nextCallback }">
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="name">Name</label>
                                <InputText id="name"
                                    v-model="registerForm.name"
                                    type="name"
                                    autofocus />
                            </div>
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="lastName">Last Name</label>
                                <InputText id="lastName"
                                    v-model="registerForm.name"
                                    type="lastName"
                                    autofocus />
                            </div>
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="genero">Genero</label>
                                <Dropdown id="genero"
                                    v-model="registerForm.genero"
                                    :options="generos"
                                    optionLabel="name"
                                    optionValue="code"
                                    type="genero"
                                    autofocus />
                            </div>
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="personalId">Personar ID</label>
                                <InputText id="personalId"
                                    v-model="registerForm.personalId"
                                    type="personalId"
                                    autofocus />
                            </div>
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="email">Email</label>
                                <InputText id="email"
                                    v-model="registerForm.email"
                                    type="email"
                                    autofocus />
                            </div>
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="password">Password</label>
                                <Password id="password"
                                    toggleMask
                                    v-model="registerForm.password"
                                    reduired
                                    autofocus />
                            </div>
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="confirmPassword">Confirm Password</label>
                                <Password id="password"
                                    toggleMask
                                    v-model="registerForm.confirmPassword"
                                    type="confirmPassword"
                                    autofocus />
                            </div>
                            <div>
                                <div class="flex gap-2 m-2 mt-4 items-center">
                                    <Checkbox id="accept"
                                        v-model="registerForm.acceptCondition"
                                        name="accept"
                                        value="Accept" />
                                    <label class="text-gray-1 text-sm"
                                        for="accept">I agree to the <a href="">terms and conditions.</a></label>
                                </div>
                                <div class="flex justify-end mt-2">
                                    <Button @click="nextCallback"
                                        label="Siguiente"
                                        class="m-2" />
                                </div>
                            </div>
                        </template>
                    </StepperPanel>
                    <StepperPanel>
                        <template #header="{ index, clickCallback }">
                            <button class="bg-transparent border-none inline-flex flex-column gap-2"
                                @click="clickCallback">
                                <span
                                    :class="['rounded-md border-2 w-8 h-8 inline-flex items-center justify-center', { 'text-white bg-green-500 border-green-500': index <= active, 'surface-border': index > active }]">
                                    <i class="pi pi-heart"></i>
                                </span>
                            </button>
                        </template>
                        <template #content="{ prevCallback }">
                            <div class="mt-3 p-2 flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="name">Name</label>
                                <InputText id="name"
                                    v-model="registerForm.name"
                                    type="name"
                                    autofocus />
                            </div>
                            <div class="mt-3 p-2 flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="email">Email</label>
                                <InputText id="email"
                                    v-model="registerForm.email"
                                    type="email"
                                    autofocus />
                            </div>
                            <div>
                                <div class="flex justify-between">
                                    <Button @click="prevCallback"
                                        severity="secondary"
                                        label="Anterior"
                                        class="m-2" />
                                    <Button type="submit"
                                        label="Registrarse"
                                        class="m-2" />
                                </div>
                            </div>
                        </template>
                    </StepperPanel>
                </Stepper>
            </form>
        </div>
    </div>
</template>
<style scoped></style>