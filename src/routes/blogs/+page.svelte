<script>
	import Card from "$lib/cards/Card.svelte";
	import CardGrid from "$lib/cards/CardGrid.svelte";
</script>
<div>
  <CardGrid>
    <Card
      title="Pivoting DotDocs 📃"
      to="blogs/dotdocs"
      description="I am pivoting my open source documentation generator for C# developers to operate from the cloud. Furthermore, I am developing a system that can connect project metadata so that their hosted documentation automatically links to others."
      date="10/5/2022"
    />
    <Card title="HoloLens 2 Development 👓" to="blogs/hololens2">
      <p>
        During the Summer, Fall, and Spring of 2021 I was employed by the Center on Culture and
        Language <em>(CCL)</em> at RIT/NTID and integrated live captioning into the HoloLens 2. My
        team and I after several months of prep competed in one of RIT's largest technical
        showcases / competitions; the RIT Imagine event. My team and two others won the TAD
        <em>(technology, arts, and design)</em>.
      </p>
    </Card>
    <Card 
      title="DotDocs - Initial Graph Database Plan" 
      to="blogs/dotdocs/neo/v1" 
      date="2/4/2023">
      <p>
        After further development of the DotDocs project, the need of a library providing
        persistent storage has arrived. Therefore, and after much consideration, I will be using a
        graph database as the primary storage for assembly info. This update outlines my goals for
        the first iteration of implementation using Neo4j.
      </p>
    </Card>
    <Card
      title="DotDocs - 1st Neo4j Implementation Results"
      to="blogs/dotdocs/neo/v2"
      date="3/18/2023">
      <p>
        With much careful planning, I am proud to say I have implemented neo4j into DotDocs.
        Storage of <code>Repository</code>, <code>Project</code>, <code>Assembly</code>, and <code>Type</code> nodes with the appropriate relationships now exist. Checkout this blog to read more and see some screenshots of the results.
      </p>
    </Card>
  </CardGrid>
</div>