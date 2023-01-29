import Card from "./Card";

export default function Cards() {
  return (
    <div class="row my-5">
      <div class="card-group">
        <Card
          title="title-one"
          description="This is description for the first box"
        />
        <Card
          title="title-Two"
          description="This is description for the  second box"
        />
        <Card
          title="title-three"
          description="This is description for the third box"
        />
      </div>
    </div>
  );
}
