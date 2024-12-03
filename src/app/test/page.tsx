import { Button, InputText } from "@/components/Atoms/atoms";
import './style.scss';
import { HiCheck } from "react-icons/hi2";

export default function Home() {
  return (
   <div className="test">
    <div className="section">
      <h1 className='h1'>Header1</h1>
      <h2 className='h2'>Header2</h2>
      <h3 className='h3'>Header3</h3>
      <p className='p'>Paragraph</p>
      <p className='sm'>Small</p>
    </div>
    <div className="section">
      <h1 className="h1">Buttons</h1>
      <div className="elements">
        <div className="white">
          <Button style='bg' color='w'>
            Button<HiCheck />
          </Button>
          <Button style='bg' color='w2'>
            Button<HiCheck />
          </Button>
          <Button style='bg' color='a'>
            Button<HiCheck />
          </Button>
          <Button style='ol' color='w'>
            Button<HiCheck />
          </Button>
          <Button style='ol' color='w2'>
            Button<HiCheck />
          </Button>
          <Button style='ol' color='a'>
            Button<HiCheck />
          </Button>
        </div>
        <div className="black">
          <Button style='bg' color='b'>
            Button<HiCheck />
          </Button>
          <Button style='bg' color='b2'>
            Button<HiCheck />
          </Button>
          <Button style='bg' color='a'>
            Button<HiCheck />
          </Button>
          <Button style='ol' color='b'>
            Button<HiCheck />
          </Button>
          <Button style='ol' color='b2'>
            Button<HiCheck />
          </Button>
          <Button style='ol' color='a'>
            Button<HiCheck />
          </Button>
        </div>
      </div>
    </div>
    <div className="section">
      <h1 className="h1">Inputs</h1>
      <div className="elements">
        <div className="white">
          <InputText style='bg' color='w' p={{icon: <HiCheck/>}}>
            Input
          </InputText>
          <InputText style='ol' color='w' p={{icon: <HiCheck/>}}>
            Input
          </InputText>
        </div>
        <div className="black">
          <InputText style='bg' color='b' >
            Input
          </InputText>
          <InputText style='ol' color='b' >
            Input
          </InputText>
        </div>
      </div>
    </div>
   </div>
  );
}