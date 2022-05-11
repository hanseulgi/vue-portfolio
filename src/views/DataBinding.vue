<template>
    <div class="databinding">
        <img alt="Vue logo" src="../assets/logo.png">
        <DataBindingList msg="데이터바인딩 페이지"/>
    </div>
</template>

<script>
// 가져올 컴포넌트
import DataBindingList from '@/components/DataBindingList.vue'

export default {
    name: 'DataBinding',
    components: {
        DataBindingList
    }
}
</script>
