<template>
    <div>
        <b-dropdown id="dropdown-category" text="Select a category to play " class="m-md-2">
            <b-dropdown-item
            v-for="(category, id) in categories" 
            :key="id"
            @click.prevent="selectCategory(category.id, category.name)"
            class="dropdown-option"
            >
            {{ category.name }}
            </b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
export default {
    props: {
        selectCategory: Function
    },
    data() {
        return {
            categories: [],
        }
    },
    methods: {
        
    },
    mounted: function() {
        fetch('https://opentdb.com/api_category.php', {
        method: 'get',
        })
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
            this.categories = jsonData.trivia_categories
        })
    },
}
</script>

<style scoped>
    .dropdown {
        margin-top: 10px;
    }

    #dropdown-category /deep/ .dropdown-menu {
    max-height: 300px;
    overflow-y: auto;
    max-width: 340px;
    overflow-x: hidden;
  }

    .dropdown-option {
        background-color:beige;
    }
</style>