<svelte:options tag="cp-counter" />

<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment} class="button">
  count is {count}
</button>

<style>
  .button {
    border: 0px none;
    background-color: grey;
    color: white;
    padding: 16px;
    border-radius: 5px;
  }
</style>