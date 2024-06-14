<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as y from 'yup';
import type { Genero } from '..types'

import useRegister from '../composables/useRegister';
const { register } = useRegister()

const active = ref(0);
const maxDate = ref(new Date());
const passwordsMatch = ref(true);
const generos = ref([
    { name: 'Masculino', code: 'M' },
    { name: 'Femenino', code: 'F' },
    { name: 'Otros', code: 'O' }
]);

const validationSchema = [
    y.object({
        name: y.string().required().label('Name'),
        lastName: y.string().required().label('Last Name'),
        genero: y.string<Genero>().required().label('Genero'),
        personalId: y.string().required().label('Personal ID'),
        email: y.string().required().email({ message: 'Must be a valid email' }).label('Email'),
        password: y.string().required().min(8).label('Password'),
        confirmPassword: y.string().oneOf([y.ref('password')], 'Passwords must match').required().min(8).label('Confirm Password'),
        acceptCondition: y.boolean().required().isTrue('You must agree to terms and conditions').label('Terms and Accept Condition'),
    }),
    y.object({
        bornDate: y.date().required().label('Fecha de Nacimiento'),
        address: y.string().required().label('Direccion'),
        specialties: y.string().required().label('Especialidad'),
        consultationPrice: y.number().required().positive().label('Valor Consulta'),
        professionalRegister: y.string().required().label('Registro Profesional'),
        preRequirements: y.string().required().label('Pre-requisitos'),
    })
];

const currentSchema = computed(() => {
    return validationSchema[active.value];
});

const { handleSubmit, defineField, errors } = useForm({
    validationSchema: currentSchema,
});

const [name, nameAttrs] = defineField('name');
const [lastName, lastNameAttrs] = defineField('lastName');
const [genero, generoAttrs] = defineField('genero');
const [personalId, personalIdAttrs] = defineField('personalId');
const [address, addressAttrs] = defineField('address');
const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword');
const [acceptCondition, acceptConditionAttrs] = defineField('acceptCondition');
const [bornDate, bornDateAttrs] = defineField('bornDate');
const [specialties, specialtiesAttrs] = defineField('specialties');
const [consultationPrice, consultationPriceAttrs] = defineField('consultationPrice');
const [professionalRegister, professionalRegisterAttrs] = defineField('professionalRegister');
const [preRequirements, preRequirementsAttrs] = defineField('preRequirements');

watch([password, confirmPassword], ([newPassword, newConfirmPassword]) => {
    passwordsMatch.value = newPassword === newConfirmPassword;
});

const registerUser = handleSubmit(async (values) => {
    await register(values, 2)
})
</script>
<template>
    <div class="ml-[calc(50% - 187px)] flex items-center justify-center p-4">
        <div v-focustrap
            class="w-full card p-4 bg-white rounded-lg shadow-lg border-2 border-gray-1"
            style="max-width: 375px">
            <form @submit.prevent="registerUser">
                <Stepper v-model:activeStep="active">
                    <StepperPanel>
                        <template #header="{ index, clickCallback }">
                            <button v-tooltip.top="{
                                value: 'Informacion personal', pt: {
                                    arrow: {
                                        style: {
                                            borderBottomColor: '#000',
                                        }
                                    },
                                    text: { style: { color: '#707070', backgroundColor: '#fff' } }
                                }, showDelay: 1000, hideDelay: 300
                            }"
                                class="bg-transparent border-none inline-flex flex-column gap-2"
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
                                    v-model="name"
                                    v-bind="nameAttrs"
                                    type="text"
                                    aria-describedby="name-help"
                                    :class="{ 'p-invalid': errors.name }"
                                    autofocus />
                                <small v-if="errors.name"
                                    id="name-help"
                                    class="p-error">
                                    {{ errors.name }}
                                </small>
                            </div>
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="lastName">Last Name</label>
                                <InputText id="lastName"
                                    v-model="lastName"
                                    v-bind="lastNameAttrs"
                                    type="text"
                                    :class="{ 'p-invalid': errors.lastName }"
                                    aria-describedby="lastName-help"
                                    autofocus />
                                <small v-if="errors.lastName"
                                    id="lastName-help"
                                    class="p-error">
                                    {{ errors.lastName }}
                                </small>
                            </div>
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="genero">Genero</label>
                                <Dropdown id="genero"
                                    v-model="genero"
                                    :options="generos"
                                    optionLabel="name"
                                    v-bind="generoAttrs"
                                    optionValue="code"
                                    type="text"
                                    aria-describedby="genero-help"
                                    :class="{ 'p-invalid': errors.genero }"
                                    autofocus />
                                <small v-if="errors.genero"
                                    id="genero-help"
                                    class="p-error">
                                    {{ errors.genero }}
                                </small>
                            </div>
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="personalId">Personar ID</label>
                                <InputText id="personalId"
                                    v-model="personalId"
                                    v-bind="personalIdAttrs"
                                    type="text"
                                    :class="{ 'p-invalid': errors.personalId }"
                                    aria-describedby="personalId-help"
                                    autofocus />
                                <small v-if="errors.personalId"
                                    id="personalId-help"
                                    class="p-error">
                                    {{ errors.personalId }}
                                </small>
                            </div>
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="email">Email</label>
                                <InputText id="email"
                                    v-model="email"
                                    v-bind="emailAttrs"
                                    type="email"
                                    :class="{ 'p-invalid': errors.email }"
                                    aria-describedby="email-help"
                                    autofocus />
                                <small v-if="errors.email"
                                    id="email-help"
                                    class="p-error">
                                    {{ errors.email }}
                                </small>
                            </div>
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="password">Password</label>
                                <Password id="password"
                                    toggleMask
                                    v-model="password"
                                    v-bind="passwordAttrs"
                                    :class="{ 'p-invalid': errors.password }"
                                    aria-describedby="password-help"
                                    autofocus />
                                <small v-if="errors.password"
                                    id="password-help"
                                    class="p-error">
                                    {{ errors.password }}
                                </small>
                            </div>
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="confirmPassword">Confirm Password</label>
                                <Password id="password"
                                    toggleMask
                                    v-model="confirmPassword"
                                    v-bind="confirmPasswordAttrs"
                                    type="password"
                                    :class="{ 'p-invalid': errors.confirmPassword || !passwordsMatch }"
                                    aria-describedby="confirm-password-help"
                                    autofocus />
                                <small v-if="errors.confirmPassword || !passwordsMatch"
                                    id="confirmPassword-help"
                                    class="p-error">
                                    {{ errors.confirmPassword }}
                                </small>
                            </div>
                            <div>
                                <div class="flex gap-2 m-2 mt-4 items-center">
                                    <Checkbox id="accept"
                                        v-model="acceptCondition"
                                        v-bind="acceptConditionAttrs"
                                        name="accept"
                                        :class="{ 'p-invalid': errors.acceptCondition }"
                                        :binary="true"
                                        value="Accept"
                                        aria-describedby="accept-condition-help" />
                                    <label class="text-gray-1 text-sm"
                                        for="accept">I agree to the <a href="">terms and conditions.</a></label>
                                </div>
                                <small v-if="errors.acceptCondition"
                                    id="acceptCondition-help"
                                    class="p-error text-center">
                                    {{ errors.acceptCondition }}
                                </small>
                                <div class="flex justify-end mt-2">
                                    <Button @click="nextCallback"
                                        label="Siguiente"
                                        class="m-2"
                                        aria-describedby="next-help" />
                                </div>
                            </div>
                        </template>
                    </StepperPanel>
                    <StepperPanel>
                        <template #header="{ index, clickCallback }">
                            <button v-tooltip.top="{
                                value: 'Informacion medica', pt: {
                                    arrow: {
                                        style: {
                                            backgroundColor: '#fff',
                                        }
                                    },
                                    text: { style: { color: '#707070', backgroundColor: '#fff' } }
                                }, showDelay: 1000, hideDelay: 300
                            }"
                                class="bg-transparent border-none inline-flex flex-column gap-2"
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
                                    v-model="bornDate"
                                    v-bind="bornDateAttrs"
                                    type="bornDate"
                                    showIcon
                                    iconDisplay="input"
                                    :maxDate="maxDate"
                                    :class="{ 'p-invalid': errors.bornDate }"
                                    aria-describedby="date-born-help" />
                                <small v-if="errors.bornDate"
                                    id="bornDate-help"
                                    class="p-error">
                                    {{ errors.bornDate }}
                                </small>
                            </div>
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="address">Direccion</label>
                                <InputText v-model="address"
                                    v-bind="addressAttrs"
                                    :class="{ 'p-invalid': errors.address }"
                                    inputId="address"
                                    aria-describedby="address-help" />
                                <small v-if="errors.address"
                                    id="address-help"
                                    class="p-error">
                                    {{ errors.address }}
                                </small>
                            </div>
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="specialties">Especialidad</label>
                                <InputText v-model="specialties"
                                    v-bind="specialtiesAttrs"
                                    inputId="specialties"
                                    :minFractionDigits="1"
                                    :class="{ 'p-invalid': errors.specialties }"
                                    suffix=" m"
                                    aria-describedby="specialties-help" />
                                <small v-if="errors.specialties"
                                    id="specialties-help"
                                    class="p-error">
                                    {{ errors.specialties }}
                                </small>
                            </div>
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="consultationPrice">Valor Consulta</label>
                                <InputNumber v-model="consultationPrice"
                                    v-bind="consultationPriceAttrs"
                                    inputId="consultationPrice"
                                    :minFractionDigits="2"
                                    :class="{ 'p-invalid': errors.consultationPrice }"
                                    prefix="$ "
                                    aria-describedby="consultationPrice-help" />
                                <small v-if="errors.consultationPrice"
                                    id="consultationPrice-help"
                                    class="p-error">
                                    {{ errors.consultationPrice }}
                                </small>
                            </div>
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="professionalRegister">Registro Profesional</label>
                                <InputText v-model="professionalRegister"
                                    v-bind="professionalRegisterAttrs"
                                    inputId="professionalRegister"
                                    :class="{ 'p-invalid': errors.professionalRegister }"
                                    aria-describedby="professionalRegister-help" />
                                <small v-if="errors.professionalRegister"
                                    id="professionalRegister-help"
                                    class="p-error">
                                    {{ errors.professionalRegister }}
                                </small>
                            </div>
                            <div class="flex flex-col">
                                <label class=" m-1 text-gray-1"
                                    for="preRequirements">Pre-requisitos</label>
                                <InputText v-model="preRequirements"
                                    v-bind="preRequirementsAttrs"
                                    inputId="preRequirements"
                                    :class="{ 'p-invalid': errors.preRequirements }"
                                    aria-describedby="preRequirements-help" />
                                <small v-if="errors.preRequirements"
                                    id="preRequirements-help"
                                    class="p-error">
                                    {{ errors.preRequirements }}
                                </small>
                            </div>
                            <div>
                                <div class="flex justify-between">
                                    <Button @click="prevCallback"
                                        severity="secondary"
                                        label="Anterior"
                                        class="m-2"
                                        aria-describedby="previous-help" />
                                    <Button :disabled="!passwordsMatch"
                                        type="submit"
                                        label="Registrarse"
                                        class="m-2"
                                        aria-describedby="register-help" />
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