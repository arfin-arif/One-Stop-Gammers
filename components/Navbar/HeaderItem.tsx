interface Props {
  title: string;
  Icon: any;
}

// #1670D1

const HeaderItem = ({ title, Icon }: Props) => {
  return (
    <div className="group  flex flex-col items-center hover:cursor-pointer w-12 md:w-20 ">
      <Icon className="h-8 mb-1 group-hover:text-slate-900 text-[#1670D1] group-hover:animate-bounce" />
      <p className="tracking-widest group-hover:text-[#1670D1] opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
