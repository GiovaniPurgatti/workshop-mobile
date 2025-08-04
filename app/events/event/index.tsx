import CardFormScreen from "../CardFormScreen";

export default function EditEvent() {
  const id = "1";

  const mockData = id
    ? { id: id, title: `Titulo ${id}`, description: `Descricao ${id}` }
    : undefined;

  return <CardFormScreen card={mockData} />;
}
