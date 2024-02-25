'use client'
import Image from "next/image";
import styles from "./page.module.css";
import styled from "@emotion/styled";

const S ={
    tag:styled.span({
        color:'#f00',
        fontSize:'18px'
    }),
    tag2:styled.div({
        color:'#298888',
        fontSize:'18px'
    })
}

export default function Tag() {
    return (
        <>
            <S.tag>안녕하세요</S.tag>
            <S.tag2>안녕하세요</S.tag2>
        </>
    );
}
