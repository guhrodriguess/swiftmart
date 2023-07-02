import { CircleNotch } from "@phosphor-icons/react";
import { LoadingComponent } from "./styles";

export default function Loading() {
  return (
    <LoadingComponent>
      <button>
        <CircleNotch size={32} weight="bold" />
      </button>
    </LoadingComponent>
  );
}
