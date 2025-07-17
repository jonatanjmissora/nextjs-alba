"use client"

import { useEffect } from "react";
import SinglePageFooter from "../_components/layout/single-page-footer";
import SinglePageHeader from "../_components/layout/single-page-header";
import SinglePageLeaf from "../_components/layout/single-page-leaf";
import { loadFavorites } from "../_lib/localstorage";

export default function FavoritesPage() {

    const favorites = [""]

  return (
    <div className="w-full h-screen px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] flex flex-col relative">
        <SinglePageHeader href="/" />
        {favorites ? (
            <FavoritesBody favorites={favorites} />
        ) : (
            <span>add some favorites</span>
        )}
        <SinglePageFooter />

        <SinglePageLeaf />
    </div>
  )
}

const FavoritesBody = ({ favorites }: { favorites: string[] }) => {
    

    useEffect(() => {
        
    }, [])

    return (
        <div className="w-full flex-1 bg-amber-500 flex justify-between items-center py-10 2xl:py-20">
            
        </div>
    )
}
