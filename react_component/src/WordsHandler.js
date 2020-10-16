/*
    @Yuqing Chen
    @Shengqi Cao
    利用前端词库处理自然语言处理后的带有词性标注的词语
 */

import React from 'react';
import { Button } from '@material-ui/core';

class WordsHandler {
    /*
        @constructor
        构造器
        @param
        {string} words 带有词性标注的词语，词语和词性未分割
    */
    constructor() {
        this.words = [];
        this.renderQueue = [];
    }

    /*
        @function getThis
        获取指向该对象的指针
    */
    getThis() {
        return this;
    }

    /*
        @function splitSpeech
        更新类中的words并把词语和词性分开
        @param
        {Array{string}} theWords NLP处理后带有词性的词语数组
    */
    splitSpeech(theWords) {
        this.words = theWords.map(
            word => {
                return word.split('/');
            }
        );
    }

    /*
        @function wordAnalysis
        词义提取核心代码 在词库中提取对应的词语 并映射
    */
    wordAnalysis() {
        /* 异步发送读取词库json请求 */
        let thesaurusURL = './Thesaurus.json';  /* 注意：./是指和index.html同级目录，必须放在public文件夹下 */
        let request = new XMLHttpRequest();
        request.open("get", thesaurusURL);
        request.send(null);     /* 没有服务器，不发送内容 */

        let obj = this.getThis(); /* 进入到request后this指针会丢失，在这里重新拷贝 */
        /* 获取到json对象后执行 */
        request.onload = function () {
            if (request.status === 200) {   /* 200就是获取成功 */
                let jsonFile = JSON.parse(request.responseText);    /* 把读到的json字符串转换为对象 */
                for (let wordArr of obj.words) {
                    let word = wordArr[0];      /* 词汇 */
                    let speech = wordArr[1];    /* 词性 */

                    if (jsonFile[speech]){                  /* 词库是否存在该词性 */
                        if (jsonFile[speech][word]) {       /* 词库是否存在该词汇 */ 
                            if (jsonFile[speech][word] === "Component") {
                                obj.renderQueue.push(
                                    (<Button variant="contained">我可爱吗</Button>)
                                );
                            }
                        }
                    }
                }
            }
        };
    }
}

export default WordsHandler