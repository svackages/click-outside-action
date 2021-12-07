<script lang="ts">
    import clickOutside from "$lib";

    let clickedOut = false;
</script>

<h1>Welcome to Click Outside Action</h1>
<p>click inside/outside to try it out</p>

<section class="container">
    <div
        class="content"
        on:click={() => clickedOut = false}
        use:clickOutside={() => clickedOut = true}>
        <h2>you have {clickedOut ? '': 'not'} clicked outside</h2>
    </div>
</section>

<style>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50vh;
    }

    .content {
        height: 50%;
        width: 50%;
        background-color: aliceblue;
        text-align: center;
        padding: 20px;
    }
</style>
