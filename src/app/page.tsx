'use client'
import Image from "next/image";
import styles from "./page.module.css";
import styled from "@emotion/styled";
import Tag from "@/app/component/tag";

const S ={
  tag:styled.span({
    color:'#f00',
    fontSize:'18px',
  })
}

export default function Home() {
  return (
    <>
      <S.tag>asdfasdfasdasdfasdfasd</S.tag>
      <Tag/>
    </>
  );
}
