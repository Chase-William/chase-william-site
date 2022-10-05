<style>
  section {
    display: flex;
    gap: 1em;
    justify-content: space-evenly;    
    flex-wrap: wrap;
  }

  @media only screen and (min-width: 768px) {
    section {
      flex-wrap: nowrap;
    }
  }
</style>

<section>
  <slot/>
</section>