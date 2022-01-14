import React from 'react';
import { MainLayoutComponent } from '../../Layout/MainLayout/MainLayoutComponent';
import { HomeScene } from './HomeScene';

export const HomeContainer = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <HomeScene />
    </>
  );
};

HomeContainer.Layout = MainLayoutComponent;

export default HomeContainer;
