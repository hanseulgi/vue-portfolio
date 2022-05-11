<template>
    <div class="databinding">
        <img alt="Vue logo" src="../assets/logo.png">
        <DataBindingList msg="데이터바인딩 페이지"/>
    </div>
</template>

<script>

import DataBindingList from '@/components/DataBindingList.vue'

export default {
    name: 'DataBinding',
    components: {
        DataBindingList
    }
}
</script>
