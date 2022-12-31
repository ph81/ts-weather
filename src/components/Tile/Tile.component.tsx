import {
  WiThermometer,
  WiHumidity,
  WiRaindrop,
  WiBarometer,
  WiSunrise,
  WiSunset,
  WiFog,
  WiNightCloudyGusts,
} from 'react-icons/wi';

interface TileProps {
  icon:
    | 'feel'
    | 'humidity'
    | 'pop'
    | 'pressure'
    | 'sunrise'
    | 'sunset'
    | 'visibility'
    | 'wind';
  title: string;
  info: string | JSX.Element;
  description?: string | JSX.Element;
}

const icons = {
  feel: WiThermometer,
  humidity: WiHumidity,
  pop: WiRaindrop,
  pressure: WiBarometer,
  sunrise: WiSunrise,
  sunset: WiSunset,
  visibility: WiFog,
  wind: WiNightCloudyGusts,
};

const Tile = ({ icon, title, info, description }: TileProps): JSX.Element => {
  const Icon = icons[icon];

  return (
    <article className="w-[140px] h-[130px] text-zinc-700 bg-white/20 backdrop-blur-ls rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-between text-center">
      <div className="flex items-center justify-center text-sm font-bold">
        <Icon /> <h4 className="ml-1">{title}</h4>
      </div>
      <h3 className="mt-2 text-lg">{info}</h3>

      <div className="text-xs font-bold">{description}</div>
    </article>
  );
};

export default Tile;
