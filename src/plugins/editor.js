import Vue from 'vue'
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import { Editor, Viewer } from '@toast-ui/vue-editor'

Vue.component('editorr', Editor)
Vue.component('toastViewer', Viewer)
