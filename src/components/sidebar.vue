<template>
  <aside :class="`${is_expended && 'is_expended'}`">
      <div class="logo">
          <img src="../assets/logo.png" alt="vue">
      </div>
      <div class="menu-toggle-wrap">
          <button class="menu-toggle" @click="menuToggle">
              <span class="material-icons">keyboard_double_arrow_right</span>
          </button>
      </div>

      <h3>Menu</h3>
      <div class="menu">
          <router-link class="button" to="/">
            <span class="material-icons">home</span>
            <span class="text">Home</span>
          </router-link>
          <router-link class="button" to="/about">
            <span class="material-icons">visibility</span>
            <span class="text">About</span>
          </router-link>
          <router-link class="button" to="/portfolio">
            <span class="material-icons">group</span>
            <span class="text">Team</span>
          </router-link>
          <router-link class="button" to="/contact">
            <span class="material-icons">email</span>
            <span class="text">Contact</span>
          </router-link>
      </div>

      <div class="flex"></div>
  </aside>
</template>

<script setup>
    import { ref } from 'vue'

    const is_expended = ref(localStorage.getItem("is_expended") === "true")

    const menuToggle = ()=> {
        is_expended.value = !is_expended.value

        localStorage.setItem("is_expended", is_expended.value)
    }
</script>

<style lang="scss" scoped>
    aside {
        display: flex;
        flex-direction: column;
        width: calc(2rem + 32px);
        min-height: 100vh;
        padding: 1rem;
        overflow: hidden;
        background-color: var(--dark);
        color: var(--light);
        transition: 0.2s;

        .flex {
            flex: 1 1 0;
        }

        .logo {
            margin-bottom: 1rem;

            img {
                width: 2rem;
            }
        }

        .menu-toggle-wrap {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 1rem;
            position: relative;
            top: 0;
            transition: 0.2s;

            .menu-toggle {
                transition: 0.2s;

                .material-icons {
                    font-size: 2rem;
                    color: var(--light);
                    transition: 0.2s;
                }

                &:hover {
                    .material-icons {
                        color: var(--primary);
                        transform: translateX(0.5rem);
                    }
                }
            }
        }

        h3, .button .text {
            opacity: 0;
            transition: 0.3s;
        }

        h3 {
            color: var(--grey);
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
        }

        .menu {
            margin: 0 -1rem;

            .button {
                display: flex;
                align-items: center;
                text-decoration: none;
                padding: 0.5rem 1rem;
                transition: 0.2s;
                color: var(--ligth);

                .material-icons {
                    font-size: 2rem;
                    transition: 0.2s;
                }
                &:hover, &.router-link-exact-active {
                    background-color: var(--dark-alt);

                    .material-icons, .text {
                        color: var(--primary);
                    }
                }

                &.router-link-exact-active {
                    border-right: 5px solid var(--primary);
                }
            }
        }

        &.is_expended {
            width: var(--sidebar-width);

            .menu-toggle-wrap {
                top: -3rem;

                .menu-toggle {
                    transform: rotate(-180deg);
                }
            }
            h3, .button .text {
                opacity: 1;
            }

            .button {
                .material-icons {
                    margin-right: 1rem;
                }
            }
        }

        @media (max-width: 768px) {
            position: fixed;
            z-index: 9999;
        }
    }
</style>