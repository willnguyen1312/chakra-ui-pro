import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";

function PopaPop({ children }: { children?: React.ReactNode }) {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          Trigger
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>{children}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

function App() {
  return (
    <div
      onClick={() => {
        // Never got call because we stopPropagation in PopaPop
        alert("click container");
      }}
    >
      <PopaPop>Hi me</PopaPop>

      <PopaPop>Another me</PopaPop>
    </div>
  );
}

export default App;
