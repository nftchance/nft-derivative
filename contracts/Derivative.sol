// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import { ERC721Derivative } from "./Derivative/ERC721Derivative.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";

/**
 * @title ERC721Derivative
 * @author @nftchance
 * @notice This is a contract that will allow the owner of a source material 
 *         can have a derivative that follows the original parent token. While
 *         it cannot be transferred it can be minted, will be shown on all major
 *         platforms and can also be burned. Functionally, it is a mirrored 
 *         token and you can make of that what you will. The real thing to 
 *         mention here is that a derivative creator will now make no royalties.
 *         Tough call in a world of purely capitalistic tendencies. 
 * @dev This implementation of the ERC-721 is only partially standard 
 *      conforming. To offer the best experience for deriviative owners
 *      the transfer features have been stripped while updating the 
 *      implementation of ownerOf() and balanceOf(). Another option would
 *      be to leave the transfer functions but just make them revert. Up to you,
 *      as this repo is entirely for research purposes.
 * @dev Due to there being edits to the core processing of the ERC721 this has
 *      been written as a 721-implementation rather than extension. If you 
 *      make an extension I would be happy to merge it!s
 */
contract Derivative is 
        ERC721Derivative
      , Ownable
{ 
    string public baseURI;

    constructor(
          string memory _name
        , string memory _symbol
        , address _mirror
        , uint256 _maxSupply
        , string memory _baseURI
    ) 
        ERC721Derivative(
              _name
            , _symbol
            , _mirror
            , _maxSupply
        )
    {
        baseURI = _baseURI;
    }

    ///@notice Do what you want with the tokenURI it doesn't really matter
    function tokenURI(
        uint256 tokenId
    )
        override
        public
        view
        returns (
            string memory
        )
    {
        require(_exists(tokenId), "ERC721Metadata: ");
    
        return string(
            abi.encodePacked(
                  baseURI
                , Strings.toString(tokenId)
            )
        );
    }

    ///@notice Allows the owner of source material to mint the derivative
    function mint(
        uint256 tokenId
    )
        public
    {
        _mint(
              msg.sender
            , tokenId
        );
    }

    ///@notice Allows the owner of the source material to burn the derivative
    function burn(
        uint256 tokenId
    )
        public
    {
        _burn(tokenId);
    }
}