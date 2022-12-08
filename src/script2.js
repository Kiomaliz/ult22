//const Phaser = require('phaser');
// const express = require('express');
//import { parse } from 'node-html-parser';

//const { Phaser } = require("./phaser.min");

//import { Phaser } from 'phaser';
var config={
    type: Phaser.AUTO,
    width: 800,
    height: 450,
    physics:{ //Fisica
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
    //---------------

};
var game = new Phaser.Game(config);
var x = 1
var g = 0;
var x2 = 0;
function preload(){
    var me 
    this.load.image('sky', 'assets/jun2.png');
    this.load.image('ground', 'assets/platform4.png');
    this.load.spritesheet('dude', 'assets/Recor4.png', {frameWidth: 70, frameHeight: 74});
    this.load.spritesheet('dude2', 'assets/Recor5.png', {frameWidth: 70, frameHeight: 74});
    this.load.spritesheet('dude3', 'assets/Recor6.png', {frameWidth: 70, frameHeight: 74});
}
function create(){
    this.add.image(400, 225, 'sky');
    platforms = this.physics.add.staticGroup();
    player = this.physics.add.sprite(100, 400, 'dude');

    player.setCollideWorldBounds(false);
    this.anims.create({
        key: 'left',

        frames: this.anims.generateFrameNumbers('dude', {prefix:'dude_', start: 0, end: 4, zeroPad: 2}),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude2', {start: 5, end: 8}),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: '',
        frames: this.anims.generateFrameNumbers('dude3', {start: 5, end: 8}),
        frameRate: 10,
        repeat: -1
    });

    //player.body.setGravityY(300);
    this.physics.add.collider(player, platforms);  // Jugador
    hg = 10;
    //------------------------- Strella
}
function update(){
    if(g==0){
        x = 1
        g=1
    }
    if(player.x<850 && g ==1){
        player.x += 2
        player.anims.play('left',true);
        
    }
    if(player.x==850){
        g = 2
    }
    if(player.x>-50 && g ==2){
        player.x -= 2
        player.anims.play('right',true);
        
    }
    if(player.x==-50 ){
        g=3
        i = 0
        player.anims.play('right',true);
    }

}
// ESTRELLAS
