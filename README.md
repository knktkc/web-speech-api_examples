# Web Speech API
Web Speech APIについての発表用資料です。

※ ちなみにMDNのコードサンプルは以下にありますので、迷い込んだ方はこちらを参照ください。
https://github.com/mdn/web-speech-api/

## 音声認識 - Asynchronous Speech Recognition -
- 入力された音声 (通常はデバイスのデフォルト音声認識サービス経由) から文脈を認識する。
- デバイスのマイクから入力された音声を検知するための複数のイベントハンドラーを持つ。
- 文法は JSpeech Grammar Format (JSGF) を使用して定義されている。（文法？）

### 音声認識でできること



### コードサンプル


## 音声合成 - Text-to-Speech -
- プログラムが文章の内容を読み取り可能にする text-to-speech コンポーネント。
- 多種類の音声タイプが提供される。
- 文章を話させることもできる。

### 音声合成でできること
- SpeechSynthesisUtterance.lang
発話の言語を取得および設定
BCP47で定義された言語タグで指定できる
- SpeechSynthesisUtterance.pitch
発話される音程を取得または設定
0〜2の範囲で設定。初期値は1。
- SpeechSynthesisUtterance.rate
発話される速度を取得および設定
0.1〜10の範囲で設定。初期値は1。
- SpeechSynthesisUtterance.text
発話したときに合成されるテキストを取得または設定
最大32,767文字まで。
寿限無が2,451文字なので、相当な文字数をセットできる。
- SpeechSynthesisUtterance.voice
発話のために使用される音声を取得して設定
SpeechSynthesis.getVoices()で取得できるSpeechSynthesisVoiceオブジェクトをセットできます。
- SpeechSynthesisUtterance.volume
発話される音量を取得または設定
0〜1の範囲で設定。初期値は1。
ということは音量を小さくはできるけど、大きくはできない。

### コードサンプル


### できそうなこと
- NoUI（会話型コマース）
https://medium.com/@Mrr_Alpaca/no-ui%E3%81%AF%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%82%92%E9%80%B2%E5%8C%96%E3%81%95%E3%81%9B%E3%82%8B%E6%96%B0%E3%81%97%E3%81%84%E6%A6%82%E5%BF%B5-ec1642520a27
https://techcrunch.com/2015/11/11/no-ui-is-the-new-ui/
http://tech.pjin.jp/blog/2015/12/07/no-ui-is-a-new-user-interface-design/
https://operator.com/
- 音声操作
- 同時通訳
- オーディオブック
