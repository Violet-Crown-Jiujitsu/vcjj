<script setup>
import { get, set } from '@vueuse/core'
const value = ref([])
const view = ref('form')

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

function handleSubmit(credentials) {
  fetch('/contactform.html', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: encode({
      'form-name': 'VCJJ-Contact-Form',
      credentials,
    }),
  })
    .then(() => set(view, 'success'))
    .catch((err) => {
      set(view, 'error')
      console.log('Error: %s', err)
    })
    .finally(() => {
      console.log('formData: %s', JSON.stringify(credentials))
    })
}
</script>
<template>
  <aside>
    <div class="form">
      <div class="title" v-if="view === 'error'">
        <h2>There was an error submitting your form.</h2>
        <p>Please try again</p>
      </div>
      <div class="title" v-if="view === 'success'">
        <h2>Thank you!</h2>
        <p>Your submission has been sent.</p>
      </div>
      <div class="title" v-else>
        <h2>Contact Us</h2>
        <p>Select classes you would like info about and we'll get back to you asap!</p>
      </div>
      <div class="form-wrap" v-if="view !== 'success'">
        <FormKit
          type="form"
          name="VCJJ-Contact-Form"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
          @submit="handleSubmit"
        >
          <!-- Name -->
          <FormKit
            type="text"
            name="name"
            placeholder="Full Name *"
            validation="required"
            validation-visibility="blur"
          />
          <!-- Email -->
          <FormKit
            type="email"
            placeholder="Email *"
            validation="required"
            validation-visibility="blur"
            :validation-messages="{
              required: 'Please enter a valid email',
            }"
          />
          <!-- Phone -->
          <FormKit
            type="tel"
            placeholder="Phone number"
            validation="matches:/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/"
            :validation-messages="{
              matches: 'Please enter a valid phone number',
            }"
            validation-visibility="blur"
          />
          <!-- Program Check Boxex -->
          <FormKit
            v-model="value"
            type="checkbox"
            label="Select a Program"
            button-class="$reset btn btn-outline btn-color-tertiary btn-font-"
            :options="['No Gi BJJ', 'Gi BJJ', 'Teen Bjj', 'Muay Thai']"
          />
        </FormKit>
      </div>
    </div>
  </aside>
</template>
<style lang="scss">
.formkit-outer {
  &[data-family='text'] {
    margin: 20px 0;
    .formkit-wrapper {
      display: flex;
      flex-direction: column;
      position: relative;
      .formkit-label {
        width: 100%;
        color: #9e9e9e;
        position: absolute;
        top: 0;
        left: 0;
        font-size: 1rem;
        cursor: text;
        text-align: initial;
        transform-origin: 0% 100%;
        transform: translateY(12px);
        transition: transform 0.2s ease-out, color 0.2s ease-out;
      }
      .formkit-input {
        height: 3rem;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid rgb(158 158 158 / 38%);
        border-radius: 0;
        outline: none;
        width: 100%;
        font-size: 16px;
        padding: 0;
        box-shadow: none;
        box-sizing: content-box;
        transition: box-shadow 0.3s, border 0.3s;
      }
    }
  }
  &[data-invalid='true'] {
    .formkit-messages {
      // helpers and errors
      position: relative;
      font-size: 12px;
      color: #f44336;
      .formkit-message {
        color: #f44336;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
  &[data-family='box'] {
    padding-top: 0.8rem;
    .formkit-fieldset {
      .formkit-legend {
        display: block;
        width: 100%;
        padding-bottom: 1rem;
        color: #686868;
        border-bottom: 1px solid rgb(158 158 158 / 38%);
      }
      .formkit-options {
        display: inline-block;
        padding-top: 1.2rem;
        .formkit-option {
          margin-bottom: 0.5rem;
        }
        .formkit-wrapper {
          position: relative;
        }
        .formkit-inner {
          input {
            position: absolute;
            left: 0;
            top: 0;
            min-width: 1em;
            width: 100%;
            height: 100%;
            z-index: 2;
            opacity: 0;
            margin: 0;
            padding: 0;
            cursor: pointer;
            &:checked {
              background: red;
            }
          }
          input:checked ~ .formkit-decorator {
            &::before {
              animation: pulse 1s;
              border-color: transparent;
            }
            &::after {
              background-color: $purple-4 !important;
              border-color: transparent;
            }
          }
          .formkit-decorator {
            &:before,
            &:after {
              content: '';
              width: 0.9em;
              height: 0.9em;
              border: 1px solid transparent;
              z-index: 0;
              top: 0.45em;
              position: absolute;
              left: 0;
              border-radius: 100%;
              border-color: #bdc3c7;
              background-color: transparent;
            }
          }
        }
        .formkit-label {
          display: inline-block;
          text-indent: 2em;
          min-width: calc(1em + 2px);
          font-size: 1rem;
          color: #686868;
        }
      }
    }
  }
}
.formkit-actions {
  padding-top: 1rem;
  .formkit-input {
    border: none;
    outline: none;
    color: white;
    background: $purple-4;
    padding: 12px 35px;
    height: 42px;
    width: 170px;
    border-radius: 4px;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
      background-color: $purple-5;
    }
  }
}
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 #bdc3c7;
  }

  100% {
    box-shadow: 0 0 0 1.5em rgba(189, 195, 199, 0);
  }
}
</style>
