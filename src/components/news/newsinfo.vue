<template>
    <div class="newsinfo">
        <h3>标题</h3>
        <p>
            <span>时间</span>
            <span>点击</span>
        </p>
        <hr>
        <div class="content"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
    .newsinfo {
        padding: 0 4px;
        >h3 {
            font-size: 16px;
            margin: 12px 0;
            text-align: center;
            color: #e92322;
        }
        >p {
            display: flex;
            justify-content:space-between;
            font-size: 12px;
            color: rgb(59, 75, 221);
        }
    }
</style>
