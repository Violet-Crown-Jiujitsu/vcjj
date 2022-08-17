<script setup>
const value = ref([])
</script>
<template>
  <aside>
    <div class="title">
      <h2>Contact Us</h2>
      <p>Select classes you would like info about and we'll get back to you asap!</p>
    </div>
    <div class="form-wrap">
      <FormKit type="form" name="VCJJ - Contact Form" method="POST" data-netlify="true">
        <!-- Name -->
        <FormKit type="text" name="name" placeholder="Full Name *" validation="required" validation-visibility="blur" />
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
          :options="['No Gi BJJ', 'Gi BJJ', 'Teen Bjj', 'Muay Thai']"
        />
      </FormKit>
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
        border-bottom: 1px solid #9e9e9e;
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
    .formkit-fieldset {
      .formkit-legend {
        color: #686868;
      }
      .formkit-options {
        display: inline-block;
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
          text-indent: 1.5em;
          min-width: calc(1em + 2px);
          font-size: 1rem;
          color: #686868;
        }
      }
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
