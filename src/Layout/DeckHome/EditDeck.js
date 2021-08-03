import Breadcrumb from "../Common/Breadcrumb";

function DeckEdit() {
  const breadCrumbLinks = [
    { dir: "/decks/new", label: "deck" },
    { dir: "/", label: "home" }
  ];
  return <Breadcrumb links={breadCrumbLinks} />;
}

export default DeckEdit;
