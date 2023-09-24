"use client";
import { styled } from 'styled-components';

const Avatar = styled.div`
  border: 1px solid grey;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #fff center/cover url("https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=") no-repeat;
`;

export const ProfileCard = () => {

  const emailProfile = () => {
    //Currently hard coded but could easily be modified with variables.
    window.location.href = "mailto:johnDoe@emailwouldgohere.com?subject=Subject&body=message%20goes%20here";
  }
  const phoneProfile = () => {
    document.location.href = "tel:+375292771265";
  }

  return (
    <div className="p-4 rounded-md shadow-md border border-gray-800 w-80 h-40 space-y-8 ">
        <div className="flex gap-5 row">
          <Avatar></Avatar>
          <div className="flex flex-col items-start">
            <h2 className="text-xl">John Doe</h2>
            <h5>Finance Administrator</h5>
          </div>
        </div>
        <div className="object-bottom align-baseline flex space-x-2 items-center ">
          <button className="bg-white-500 outline-black hover:bg-gray-200 border border-gray-800 text-black py-1 px-12 rounded-xl" onClick={() => emailProfile()}>
            Email
          </button>
          <button className="bg-white-500 hover:bg-gray-200 border border-gray-800 text-black py-1 px-12 rounded-xl" onClick={() => phoneProfile()}>
            Phone
          </button>
        </div>
    </div>
  );
};
