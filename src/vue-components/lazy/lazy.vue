<template>
    <div>
        <md-menu>
            <md-button md-menu-trigger>Default</md-button>

            <md-menu-content>
                <md-menu-item>My Item 1</md-menu-item>
                <md-menu-item>My Item 2</md-menu-item>
                <md-menu-item>My Item 3</md-menu-item>
            </md-menu-content>
        </md-menu>

        <md-menu md-size="medium" md-align-trigger>
            <md-button md-menu-trigger>Align with trigger</md-button>

            <md-menu-content>
                <md-menu-item>My Item 1</md-menu-item>
                <md-menu-item>My Item 2</md-menu-item>
                <md-menu-item>My Item 3</md-menu-item>
            </md-menu-content>
        </md-menu>

        <md-menu md-size="medium" :md-offset-x="127" :md-offset-y="-36">
            <md-button md-menu-trigger>Custom Offset</md-button>

            <md-menu-content>
                <md-menu-item>My Item 1</md-menu-item>
                <md-menu-item>My Item 2</md-menu-item>
                <md-menu-item>My Item 3</md-menu-item>
            </md-menu-content>
        </md-menu>
        <div>
            <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
            <md-progress-spinner class="md-accent" md-mode="indeterminate"></md-progress-spinner>
        </div>
        <div>
            <div class="md-layout md-gutter">
                <div class="md-layout-item md-layout md-gutter">
                    <div class="md-layout-item"></div>
                    <div class="md-layout-item"></div>
                    <div class="md-layout-item"></div>
                </div>

                <div class="md-layout-item md-layout md-gutter">
                    <div class="md-layout-item"></div>
                    <div class="md-layout-item"></div>
                </div>
            </div>
        </div>
        <div>
            <md-datepicker v-model="selectedDate" md-immediately />
        </div>
    </div>
</template>

<script>
    export default {


        data: () => ({
            selectedDate: new Date('2018/03/26')
        })

    }
</script>

<style lang="scss" scoped>
    .md-menu {
        margin: 24px;
    }
</style>


