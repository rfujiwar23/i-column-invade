<template>
    <div class="categorize">

  <!-- <nav class="navbar navbar-light bg-light">
  
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown1" aria-controls="navbarNavDropdown1" aria-expanded="" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Manufacturer List</a>
    
      <div class="collapse navbar-collapse" id="navbarNavDropdown1">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Filter By:
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <span class="dropdown-item" v-for="category in categories" :key="category" @click="handleMenuClick(category)">
                    {{category}}
                    
                </span>
            </div>
          </li>
        </ul>
      </div>
  </nav> -->

      <div class="select-menu">
        <h6>メーカー一覧</h6>
        <select @change="handleMenuClick($event)">
          <option value="Choose" disabled selected>メーカーを選択</option>
          <option v-for="category in categories" :key="category" :value="category" >{{ category }}</option>
        </select>
      </div>

    


    </div>
    
</template>

<script>
import axios from 'axios'

export default {
  props: {
    categories: { type: Array, required: true }
  },
  methods: {
    handleMenuClick(event) {
      this.$emit('categorySelected', event.target.value)
    }
  },
}
</script>

<style lang="scss">



.navbar {
  .navbar-brand {
    font-size:0.9em;
  }
  .navbar-toggler {
    border-color: rgba(0,0,0,0);
  }
  .navbar-nav {
    .nav-item {
      .nav-link {
        font-size:0.8em;
      }
    }
  }
}

.categorize {
    padding:3vh 0;
    font-family: 'Noto Sans JP',sans-serif;
    .select-menu {
      width:50%;
      margin:0 auto;
      // background:red;
      h6 {
        text-align:center;
        font-size:1.25em;
      }
      select {
        width:100%;
        background-color: #255a92;
        border: none;
        font-size: 16px;
        padding:3px 5px;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
        -webkit-appearance: button;
        appearance: button;
        outline: none;
        color:white;
      }
    }
}

.dropdown-menu {
  span.dropdown-item {
    text-align:center;
    border-bottom:1px dotted rgba(212,212,212,0.6);
    // padding:3px 0;
  }
  span.dropdown-item:nth-last-child(0) {
    border-bottom:none;
  }
}

@media screen and (max-width:520px){
  .btn-group {
    width:100%;
    .dropdown-menu {
      width:100%;
    }
  }

  .categorize {
    padding:2vh 0;
    .select-menu {
      width:56%;
      margin:0 auto;
      // background:red;
      h6 {
        text-align:center;
      }
      select {
        width:100%;
      }
    }
  }
}

</style>

