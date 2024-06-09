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
    bornDate: string;
    height: string;
    weight: string;
    deasea: string;
    personalHistory: string;
    familyHistory: string;

}
const active = ref(0);
const haveDeasea = ref(false);
const havePersonalHistory = ref(false);
const haveFamilyHistory = ref(false);
const maxDate = ref(new Date());

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
    deasea: "",
    personalHistory: "",
    familyHistory: "",
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
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="bornDate">Fecha de Nacimiento</label>
                                <Calendar id="bornDate"
                                    v-model="registerForm.bornDate"
                                    type="bornDate"
                                    showIcon
                                    iconDisplay="input"
                                    :maxDate="maxDate" />
                            </div>
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="height">Estatura (m)</label>
                                <InputNumber v-model="registerForm.height"
                                    inputId="height"
                                    :minFractionDigits="1"
                                    suffix=" m" />
                            </div>
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="weight">Peso (kg)</label>
                                <InputNumber v-model="registerForm.weight"
                                    inputId="weight"
                                    :minFractionDigits="1"
                                    suffix=" kg" />
                            </div>

                            <div class="flex flex-col">
                                <div class="flex justify-start items-center">
                                    <Checkbox inputId="haveDeasea"
                                        v-model="haveDeasea"
                                        :binary="true"
                                        value="haveDeasea"
                                        name="haveDeasea" />
                                    <label class=" m-1 text-gray-1"
                                        for="haveDeasea">Sufre de alguna alergia?</label>
                                </div>
                                <Textarea v-show="haveDeasea"
                                    v-model="registerForm.deasea"
                                    rows="5"
                                    placeholder="Especifique la alergia o alergias."
                                    cols="30" />
                            </div>
                            <div class="flex flex-col">
                                <div class="flex justify-start items-center">
                                    <Checkbox inputId="personalHistory"
                                        v-model="havePersonalHistory"
                                        :binary="true"
                                        value="personalHistory"
                                        name="personalHistory" />
                                    <label class=" m-1 text-gray-1"
                                        for="personalHistory">Tiene antecedentes personales?</label>
                                </div>
                                <Textarea v-show="havePersonalHistory"
                                    v-model="registerForm.personalHistory"
                                    rows="5"
                                    placeholder="Enfermedades que padece."
                                    cols="30" />
                            </div>
                            <div class="flex flex-col">
                                <div class="flex justify-start items-center">
                                    <Checkbox inputId="familyHistory"
                                        v-model="haveFamilyHistory"
                                        :binary="true"
                                        value="familyHistory"
                                        name="familyHistory" />
                                    <label class=" m-1 text-gray-1"
                                        for="familyHistory">Tiene antecedente personales?</label>
                                </div>
                                <Textarea v-show="haveFamilyHistory"
                                    v-model="registerForm.familyHistory"
                                    rows="5"
                                    placeholder="Enfermedades heridataria o que padece algun familiar que sea relevante."
                                    cols="30" />
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
para la información medica del paciente se debe agregar fecha de nacimiento, estatura, peso, antecedentes familiares,
sufre de alguna enfermedad (si/no), antecedentes personales