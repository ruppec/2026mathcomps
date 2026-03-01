export function run_web() {
    wasm.run_web();
}
export function __wbg_Window_6419f7513544dd0b(arg0) {
    const ret = getObject(arg0).Window;
    return addHeapObject(ret);
}
export function __wbg_Window_d1bf622f71ff0629(arg0) {
    const ret = getObject(arg0).Window;
    return addHeapObject(ret);
}
export function __wbg_WorkerGlobalScope_147f18e856464ee4(arg0) {
    const ret = getObject(arg0).WorkerGlobalScope;
    return addHeapObject(ret);
}
export function __wbg___wbindgen_debug_string_0bc8482c6e3508ae(arg0, arg1) {
    const ret = debugString(getObject(arg1));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg___wbindgen_is_function_0095a73b8b156f76(arg0) {
    const ret = typeof(getObject(arg0)) === 'function';
    return ret;
}
export function __wbg___wbindgen_is_null_ac34f5003991759a(arg0) {
    const ret = getObject(arg0) === null;
    return ret;
}
export function __wbg___wbindgen_is_undefined_9e4d92534c42d778(arg0) {
    const ret = getObject(arg0) === undefined;
    return ret;
}
export function __wbg___wbindgen_throw_be289d5034ed271b(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
}
export function __wbg__wbg_cb_unref_d9b87ff7982e3b21(arg0) {
    getObject(arg0)._wbg_cb_unref();
}
export function __wbg_abort_2f0584e03e8e3950(arg0) {
    getObject(arg0).abort();
}
export function __wbg_activeElement_1554b6917654f8d6(arg0) {
    const ret = getObject(arg0).activeElement;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_addEventListener_3acb0aad4483804c() { return handleError(function (arg0, arg1, arg2, arg3) {
    getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
}, arguments); }
export function __wbg_addListener_03e8162d7e03c823() { return handleError(function (arg0, arg1) {
    getObject(arg0).addListener(getObject(arg1));
}, arguments); }
export function __wbg_altKey_73c1173ba53073d5(arg0) {
    const ret = getObject(arg0).altKey;
    return ret;
}
export function __wbg_altKey_8155c319c215e3aa(arg0) {
    const ret = getObject(arg0).altKey;
    return ret;
}
export function __wbg_animate_6ec571f163cf6f8d(arg0, arg1, arg2) {
    const ret = getObject(arg0).animate(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}
export function __wbg_appendChild_dea38765a26d346d() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).appendChild(getObject(arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_beginRenderPass_5959b1e03e4f545c() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).beginRenderPass(getObject(arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_blockSize_ef9a626745d7dfac(arg0) {
    const ret = getObject(arg0).blockSize;
    return ret;
}
export function __wbg_body_f67922363a220026(arg0) {
    const ret = getObject(arg0).body;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_brand_9562792cbb4735c3(arg0, arg1) {
    const ret = getObject(arg1).brand;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_brands_a1e7a2bce052128f(arg0) {
    const ret = getObject(arg0).brands;
    return addHeapObject(ret);
}
export function __wbg_buffer_26d0910f3a5bc899(arg0) {
    const ret = getObject(arg0).buffer;
    return addHeapObject(ret);
}
export function __wbg_button_d86841d0a03adc44(arg0) {
    const ret = getObject(arg0).button;
    return ret;
}
export function __wbg_buttons_a158a0cad3175f24(arg0) {
    const ret = getObject(arg0).buttons;
    return ret;
}
export function __wbg_call_389efe28435a9388() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_cancelAnimationFrame_cd35895d78cf4510() { return handleError(function (arg0, arg1) {
    getObject(arg0).cancelAnimationFrame(arg1);
}, arguments); }
export function __wbg_cancelIdleCallback_fdfaaf4ca585e729(arg0, arg1) {
    getObject(arg0).cancelIdleCallback(arg1 >>> 0);
}
export function __wbg_cancel_09c394f0894744eb(arg0) {
    getObject(arg0).cancel();
}
export function __wbg_catch_c1f8c7623b458214(arg0, arg1) {
    const ret = getObject(arg0).catch(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_clearTimeout_df03cf00269bc442(arg0, arg1) {
    getObject(arg0).clearTimeout(arg1);
}
export function __wbg_close_fad2f0ee451926ed(arg0) {
    getObject(arg0).close();
}
export function __wbg_code_dee0dae4730408e1(arg0, arg1) {
    const ret = getObject(arg1).code;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_configure_8d74ee79dc392b1f() { return handleError(function (arg0, arg1) {
    getObject(arg0).configure(getObject(arg1));
}, arguments); }
export function __wbg_contains_1056459c33f961e8(arg0, arg1) {
    const ret = getObject(arg0).contains(getObject(arg1));
    return ret;
}
export function __wbg_contentRect_79b98e4d4f4728a4(arg0) {
    const ret = getObject(arg0).contentRect;
    return addHeapObject(ret);
}
export function __wbg_createBindGroupLayout_37b290868edc95c3() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).createBindGroupLayout(getObject(arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_createBindGroup_9e48ec0df6021806(arg0, arg1) {
    const ret = getObject(arg0).createBindGroup(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_createBuffer_301327852bcb0fc9() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).createBuffer(getObject(arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_createCommandEncoder_f91fd6a7bbb31da6(arg0, arg1) {
    const ret = getObject(arg0).createCommandEncoder(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_createElement_49f60fdcaae809c8() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).createElement(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_createObjectURL_918185db6a10a0c8() { return handleError(function (arg0, arg1) {
    const ret = URL.createObjectURL(getObject(arg1));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_createPipelineLayout_e218679853a4ec90(arg0, arg1) {
    const ret = getObject(arg0).createPipelineLayout(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_createRenderPipeline_01226de8ac511c31() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).createRenderPipeline(getObject(arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_createSampler_dd08c9ffd5b1afa4(arg0, arg1) {
    const ret = getObject(arg0).createSampler(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_createShaderModule_a7e2ac8c2d5bd874(arg0, arg1) {
    const ret = getObject(arg0).createShaderModule(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_createTexture_47efd1fcfeeaeac8() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).createTexture(getObject(arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_createView_bb87ba5802a138dc() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).createView(getObject(arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_ctrlKey_09a1b54d77dea92b(arg0) {
    const ret = getObject(arg0).ctrlKey;
    return ret;
}
export function __wbg_ctrlKey_96ff94f8b18636a3(arg0) {
    const ret = getObject(arg0).ctrlKey;
    return ret;
}
export function __wbg_debug_a4099fa12db6cd61(arg0) {
    console.debug(getObject(arg0));
}
export function __wbg_deltaMode_a1d1df711e44cefc(arg0) {
    const ret = getObject(arg0).deltaMode;
    return ret;
}
export function __wbg_deltaX_f0ca9116db5f7bc1(arg0) {
    const ret = getObject(arg0).deltaX;
    return ret;
}
export function __wbg_deltaY_eb94120160ac821c(arg0) {
    const ret = getObject(arg0).deltaY;
    return ret;
}
export function __wbg_devicePixelContentBoxSize_8f39437eab7f03ea(arg0) {
    const ret = getObject(arg0).devicePixelContentBoxSize;
    return addHeapObject(ret);
}
export function __wbg_devicePixelRatio_5c458affc89fc209(arg0) {
    const ret = getObject(arg0).devicePixelRatio;
    return ret;
}
export function __wbg_disconnect_0a2d26237dfc1e9e(arg0) {
    getObject(arg0).disconnect();
}
export function __wbg_disconnect_5202f399852258c0(arg0) {
    getObject(arg0).disconnect();
}
export function __wbg_document_ee35a3d3ae34ef6c(arg0) {
    const ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_drawIndexed_3cb778da4c5793f5(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).drawIndexed(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5 >>> 0);
}
export function __wbg_draw_35bd445973b180dc(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).draw(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
}
export function __wbg_end_ddc7a483fce32eed(arg0) {
    getObject(arg0).end();
}
export function __wbg_error_7534b8e9a36f1ab4(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_export4(deferred0_0, deferred0_1, 1);
    }
}
export function __wbg_error_9a7fe3f932034cde(arg0) {
    console.error(getObject(arg0));
}
export function __wbg_error_f852e41c69b0bd84(arg0, arg1) {
    console.error(getObject(arg0), getObject(arg1));
}
export function __wbg_finish_7c3e136077cc2230(arg0) {
    const ret = getObject(arg0).finish();
    return addHeapObject(ret);
}
export function __wbg_finish_db51f74029254467(arg0, arg1) {
    const ret = getObject(arg0).finish(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_focus_128ff465f65677cc() { return handleError(function (arg0) {
    getObject(arg0).focus();
}, arguments); }
export function __wbg_fullscreenElement_25b445e2961e68ba(arg0) {
    const ret = getObject(arg0).fullscreenElement;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_getCoalescedEvents_21492912fd0145ec(arg0) {
    const ret = getObject(arg0).getCoalescedEvents;
    return addHeapObject(ret);
}
export function __wbg_getCoalescedEvents_8d19e426e1461e96(arg0) {
    const ret = getObject(arg0).getCoalescedEvents();
    return addHeapObject(ret);
}
export function __wbg_getComputedStyle_2d1f9dfe4ee7e0b9() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).getComputedStyle(getObject(arg1));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments); }
export function __wbg_getContext_2966500392030d63() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments); }
export function __wbg_getContext_2a5764d48600bc43() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments); }
export function __wbg_getCurrentTexture_b82524d31095411f() { return handleError(function (arg0) {
    const ret = getObject(arg0).getCurrentTexture();
    return addHeapObject(ret);
}, arguments); }
export function __wbg_getElementById_e34377b79d7285f6(arg0, arg1, arg2) {
    const ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_getMappedRange_98acf7ad62c501ee() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).getMappedRange(arg1, arg2);
    return addHeapObject(ret);
}, arguments); }
export function __wbg_getOwnPropertyDescriptor_03ccfd856865081b(arg0, arg1) {
    const ret = Object.getOwnPropertyDescriptor(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_getPreferredCanvasFormat_92cc631581256e43(arg0) {
    const ret = getObject(arg0).getPreferredCanvasFormat();
    return (__wbindgen_enum_GpuTextureFormat.indexOf(ret) + 1 || 96) - 1;
}
export function __wbg_getPropertyValue_d6911b2a1f9acba9() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = getObject(arg1).getPropertyValue(getStringFromWasm0(arg2, arg3));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_get_9b94d73e6221f75c(arg0, arg1) {
    const ret = getObject(arg0)[arg1 >>> 0];
    return addHeapObject(ret);
}
export function __wbg_get_d8db2ad31d529ff8(arg0, arg1) {
    const ret = getObject(arg0)[arg1 >>> 0];
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_gpu_4b2187814fd587ca(arg0) {
    const ret = getObject(arg0).gpu;
    return addHeapObject(ret);
}
export function __wbg_height_c2027cf67d1c9b11(arg0) {
    const ret = getObject(arg0).height;
    return ret;
}
export function __wbg_info_148d043840582012(arg0) {
    console.info(getObject(arg0));
}
export function __wbg_inlineSize_3e4e7e8c813884fd(arg0) {
    const ret = getObject(arg0).inlineSize;
    return ret;
}
export function __wbg_instanceof_GpuAdapter_5e451ad6596e2784(arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof GPUAdapter;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_instanceof_GpuCanvasContext_f70ee27f49f4f884(arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof GPUCanvasContext;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_instanceof_Window_ed49b2db8df90359(arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof Window;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_isIntersecting_6807d592d68e059e(arg0) {
    const ret = getObject(arg0).isIntersecting;
    return ret;
}
export function __wbg_is_f29129f676e5410c(arg0, arg1) {
    const ret = Object.is(getObject(arg0), getObject(arg1));
    return ret;
}
export function __wbg_key_d41e8e825e6bb0e9(arg0, arg1) {
    const ret = getObject(arg1).key;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_label_8296b38115112ca4(arg0, arg1) {
    const ret = getObject(arg1).label;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_length_32ed9a279acd054c(arg0) {
    const ret = getObject(arg0).length;
    return ret;
}
export function __wbg_length_35a7bace40f36eac(arg0) {
    const ret = getObject(arg0).length;
    return ret;
}
export function __wbg_limits_22116faf3a912173(arg0) {
    const ret = getObject(arg0).limits;
    return addHeapObject(ret);
}
export function __wbg_location_22bcb1a188a96eb1(arg0) {
    const ret = getObject(arg0).location;
    return ret;
}
export function __wbg_log_6b5ca2e6124b2808(arg0) {
    console.log(getObject(arg0));
}
export function __wbg_mapAsync_2dba5c7b48d2e598(arg0, arg1, arg2, arg3) {
    const ret = getObject(arg0).mapAsync(arg1 >>> 0, arg2, arg3);
    return addHeapObject(ret);
}
export function __wbg_matchMedia_91d4fc9729dc3c84() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).matchMedia(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments); }
export function __wbg_matches_4b5c22bd830f7bb3(arg0) {
    const ret = getObject(arg0).matches;
    return ret;
}
export function __wbg_maxBindGroups_af2c64a371bc64b2(arg0) {
    const ret = getObject(arg0).maxBindGroups;
    return ret;
}
export function __wbg_maxBindingsPerBindGroup_430f6510523172d9(arg0) {
    const ret = getObject(arg0).maxBindingsPerBindGroup;
    return ret;
}
export function __wbg_maxBufferSize_68b45c1b69c22207(arg0) {
    const ret = getObject(arg0).maxBufferSize;
    return ret;
}
export function __wbg_maxColorAttachmentBytesPerSample_cbfce6f5737b4853(arg0) {
    const ret = getObject(arg0).maxColorAttachmentBytesPerSample;
    return ret;
}
export function __wbg_maxColorAttachments_70e7c33a58d9fc56(arg0) {
    const ret = getObject(arg0).maxColorAttachments;
    return ret;
}
export function __wbg_maxComputeInvocationsPerWorkgroup_4ad21bf35b7bd17f(arg0) {
    const ret = getObject(arg0).maxComputeInvocationsPerWorkgroup;
    return ret;
}
export function __wbg_maxComputeWorkgroupSizeX_854c87a3ea2e5a00(arg0) {
    const ret = getObject(arg0).maxComputeWorkgroupSizeX;
    return ret;
}
export function __wbg_maxComputeWorkgroupSizeY_965ebcb7fee4acf5(arg0) {
    const ret = getObject(arg0).maxComputeWorkgroupSizeY;
    return ret;
}
export function __wbg_maxComputeWorkgroupSizeZ_3bf468106936874c(arg0) {
    const ret = getObject(arg0).maxComputeWorkgroupSizeZ;
    return ret;
}
export function __wbg_maxComputeWorkgroupStorageSize_b9cab4f75b0f03e3(arg0) {
    const ret = getObject(arg0).maxComputeWorkgroupStorageSize;
    return ret;
}
export function __wbg_maxComputeWorkgroupsPerDimension_f4664066d76015da(arg0) {
    const ret = getObject(arg0).maxComputeWorkgroupsPerDimension;
    return ret;
}
export function __wbg_maxDynamicStorageBuffersPerPipelineLayout_6b7faf56a6e328ad(arg0) {
    const ret = getObject(arg0).maxDynamicStorageBuffersPerPipelineLayout;
    return ret;
}
export function __wbg_maxDynamicUniformBuffersPerPipelineLayout_22a38cc27e2f4626(arg0) {
    const ret = getObject(arg0).maxDynamicUniformBuffersPerPipelineLayout;
    return ret;
}
export function __wbg_maxSampledTexturesPerShaderStage_97c70c39fb197a2b(arg0) {
    const ret = getObject(arg0).maxSampledTexturesPerShaderStage;
    return ret;
}
export function __wbg_maxSamplersPerShaderStage_a148c7e536a3807c(arg0) {
    const ret = getObject(arg0).maxSamplersPerShaderStage;
    return ret;
}
export function __wbg_maxStorageBufferBindingSize_bfaa9c302ad157e3(arg0) {
    const ret = getObject(arg0).maxStorageBufferBindingSize;
    return ret;
}
export function __wbg_maxStorageBuffersPerShaderStage_463d04005d78f248(arg0) {
    const ret = getObject(arg0).maxStorageBuffersPerShaderStage;
    return ret;
}
export function __wbg_maxStorageTexturesPerShaderStage_3fe774bbe6ad1371(arg0) {
    const ret = getObject(arg0).maxStorageTexturesPerShaderStage;
    return ret;
}
export function __wbg_maxTextureArrayLayers_6b1a7b0b3b4c0556(arg0) {
    const ret = getObject(arg0).maxTextureArrayLayers;
    return ret;
}
export function __wbg_maxTextureDimension1D_e79117695a706815(arg0) {
    const ret = getObject(arg0).maxTextureDimension1D;
    return ret;
}
export function __wbg_maxTextureDimension2D_cbb3e7343bea93d1(arg0) {
    const ret = getObject(arg0).maxTextureDimension2D;
    return ret;
}
export function __wbg_maxTextureDimension3D_7ac996fb8fe18286(arg0) {
    const ret = getObject(arg0).maxTextureDimension3D;
    return ret;
}
export function __wbg_maxUniformBufferBindingSize_22c4f55b73d306cf(arg0) {
    const ret = getObject(arg0).maxUniformBufferBindingSize;
    return ret;
}
export function __wbg_maxUniformBuffersPerShaderStage_65e2b2eaf78ef4e1(arg0) {
    const ret = getObject(arg0).maxUniformBuffersPerShaderStage;
    return ret;
}
export function __wbg_maxVertexAttributes_a6c97c2dc4a8d443(arg0) {
    const ret = getObject(arg0).maxVertexAttributes;
    return ret;
}
export function __wbg_maxVertexBufferArrayStride_305ba73c4de05f82(arg0) {
    const ret = getObject(arg0).maxVertexBufferArrayStride;
    return ret;
}
export function __wbg_maxVertexBuffers_df4a4911d2c540d8(arg0) {
    const ret = getObject(arg0).maxVertexBuffers;
    return ret;
}
export function __wbg_media_7bcde781569bca4c(arg0, arg1) {
    const ret = getObject(arg1).media;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_metaKey_374999c340f70626(arg0) {
    const ret = getObject(arg0).metaKey;
    return ret;
}
export function __wbg_metaKey_67113fb40365d736(arg0) {
    const ret = getObject(arg0).metaKey;
    return ret;
}
export function __wbg_minStorageBufferOffsetAlignment_12d731adbf75fd21(arg0) {
    const ret = getObject(arg0).minStorageBufferOffsetAlignment;
    return ret;
}
export function __wbg_minUniformBufferOffsetAlignment_2a0a0d2e84c280a7(arg0) {
    const ret = getObject(arg0).minUniformBufferOffsetAlignment;
    return ret;
}
export function __wbg_movementX_ff6524e06bc35b6a(arg0) {
    const ret = getObject(arg0).movementX;
    return ret;
}
export function __wbg_movementY_4cec81d9850ad239(arg0) {
    const ret = getObject(arg0).movementY;
    return ret;
}
export function __wbg_navigator_43be698ba96fc088(arg0) {
    const ret = getObject(arg0).navigator;
    return addHeapObject(ret);
}
export function __wbg_navigator_4478931f32ebca57(arg0) {
    const ret = getObject(arg0).navigator;
    return addHeapObject(ret);
}
export function __wbg_new_2e2be9617c4407d5() { return handleError(function (arg0) {
    const ret = new ResizeObserver(getObject(arg0));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_new_361308b2356cecd0() {
    const ret = new Object();
    return addHeapObject(ret);
}
export function __wbg_new_3eb36ae241fe6f44() {
    const ret = new Array();
    return addHeapObject(ret);
}
export function __wbg_new_4f8f3c123e474358() { return handleError(function (arg0, arg1) {
    const ret = new Worker(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_new_6f0524fbfa300c47() { return handleError(function () {
    const ret = new MessageChannel();
    return addHeapObject(ret);
}, arguments); }
export function __wbg_new_8a6f238a6ece86ea() {
    const ret = new Error();
    return addHeapObject(ret);
}
export function __wbg_new_8c6e67a40cee1f83() { return handleError(function (arg0) {
    const ret = new IntersectionObserver(getObject(arg0));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_new_b949e7f56150a5d1() { return handleError(function () {
    const ret = new AbortController();
    return addHeapObject(ret);
}, arguments); }
export function __wbg_new_from_slice_a3d2629dc1826784(arg0, arg1) {
    const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
    return addHeapObject(ret);
}
export function __wbg_new_no_args_1c7c842f08d00ebb(arg0, arg1) {
    const ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
}
export function __wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1(arg0, arg1, arg2) {
    const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
}
export function __wbg_new_with_str_sequence_and_options_9b8b0bee99ec6b0f() { return handleError(function (arg0, arg1) {
    const ret = new Blob(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_now_2c95c9de01293173(arg0) {
    const ret = getObject(arg0).now();
    return ret;
}
export function __wbg_observe_1ae37077cf10b11b(arg0, arg1, arg2) {
    getObject(arg0).observe(getObject(arg1), getObject(arg2));
}
export function __wbg_observe_2a9d63459970a2c1(arg0, arg1) {
    getObject(arg0).observe(getObject(arg1));
}
export function __wbg_observe_b9abc08d6d829e56(arg0, arg1) {
    getObject(arg0).observe(getObject(arg1));
}
export function __wbg_of_9ab14f9d4bfb5040(arg0, arg1) {
    const ret = Array.of(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_of_f915f7cd925b21a5(arg0) {
    const ret = Array.of(getObject(arg0));
    return addHeapObject(ret);
}
export function __wbg_offsetX_cb6a38e6f23cb4a6(arg0) {
    const ret = getObject(arg0).offsetX;
    return ret;
}
export function __wbg_offsetY_43e21941c5c1f8bf(arg0) {
    const ret = getObject(arg0).offsetY;
    return ret;
}
export function __wbg_onSubmittedWorkDone_22f709e16b81d1c2(arg0) {
    const ret = getObject(arg0).onSubmittedWorkDone();
    return addHeapObject(ret);
}
export function __wbg_performance_7a3ffd0b17f663ad(arg0) {
    const ret = getObject(arg0).performance;
    return addHeapObject(ret);
}
export function __wbg_persisted_de98357e1aaf6546(arg0) {
    const ret = getObject(arg0).persisted;
    return ret;
}
export function __wbg_play_63bc12f42e16af91(arg0) {
    getObject(arg0).play();
}
export function __wbg_pointerId_466b1bdcaf2fe835(arg0) {
    const ret = getObject(arg0).pointerId;
    return ret;
}
export function __wbg_pointerType_ba53c6f18634a26d(arg0, arg1) {
    const ret = getObject(arg1).pointerType;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_port1_6251ddc5cf5c9287(arg0) {
    const ret = getObject(arg0).port1;
    return addHeapObject(ret);
}
export function __wbg_port2_b2a294b0ede1e13c(arg0) {
    const ret = getObject(arg0).port2;
    return addHeapObject(ret);
}
export function __wbg_postMessage_46eeeef39934b448() { return handleError(function (arg0, arg1) {
    getObject(arg0).postMessage(getObject(arg1));
}, arguments); }
export function __wbg_postMessage_e45c89e4826cf2ef() { return handleError(function (arg0, arg1, arg2) {
    getObject(arg0).postMessage(getObject(arg1), getObject(arg2));
}, arguments); }
export function __wbg_postTask_41d93e93941e4a3d(arg0, arg1, arg2) {
    const ret = getObject(arg0).postTask(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}
export function __wbg_pressure_f01a99684f7a6cf3(arg0) {
    const ret = getObject(arg0).pressure;
    return ret;
}
export function __wbg_preventDefault_cdcfcd7e301b9702(arg0) {
    getObject(arg0).preventDefault();
}
export function __wbg_prototype_c28bca39c45aba9b() {
    const ret = ResizeObserverEntry.prototype;
    return addHeapObject(ret);
}
export function __wbg_prototypesetcall_bdcdcc5842e4d77d(arg0, arg1, arg2) {
    Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), getObject(arg2));
}
export function __wbg_push_8ffdcb2063340ba5(arg0, arg1) {
    const ret = getObject(arg0).push(getObject(arg1));
    return ret;
}
export function __wbg_querySelectorAll_1283aae52043a951() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).querySelectorAll(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
}, arguments); }
export function __wbg_queueMicrotask_0aa0a927f78f5d98(arg0) {
    const ret = getObject(arg0).queueMicrotask;
    return addHeapObject(ret);
}
export function __wbg_queueMicrotask_5bb536982f78a56f(arg0) {
    queueMicrotask(getObject(arg0));
}
export function __wbg_queueMicrotask_885fd8605352e25d(arg0, arg1) {
    getObject(arg0).queueMicrotask(getObject(arg1));
}
export function __wbg_queue_e7ab52ab0880dce9(arg0) {
    const ret = getObject(arg0).queue;
    return addHeapObject(ret);
}
export function __wbg_removeEventListener_e63328781a5b9af9() { return handleError(function (arg0, arg1, arg2, arg3) {
    getObject(arg0).removeEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
}, arguments); }
export function __wbg_removeListener_e2a199028636dcf5() { return handleError(function (arg0, arg1) {
    getObject(arg0).removeListener(getObject(arg1));
}, arguments); }
export function __wbg_removeProperty_a0d2ff8a76ffd2b1() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = getObject(arg1).removeProperty(getStringFromWasm0(arg2, arg3));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_repeat_375aae5c5c6a0258(arg0) {
    const ret = getObject(arg0).repeat;
    return ret;
}
export function __wbg_requestAdapter_eb00393b717ebb9c(arg0, arg1) {
    const ret = getObject(arg0).requestAdapter(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_requestAnimationFrame_43682f8e1c5e5348() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).requestAnimationFrame(getObject(arg1));
    return ret;
}, arguments); }
export function __wbg_requestDevice_1be6e30ff9d67933(arg0, arg1) {
    const ret = getObject(arg0).requestDevice(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_requestFullscreen_86fc6cdb76000482(arg0) {
    const ret = getObject(arg0).requestFullscreen;
    return addHeapObject(ret);
}
export function __wbg_requestFullscreen_9f0611438eb929cf(arg0) {
    const ret = getObject(arg0).requestFullscreen();
    return addHeapObject(ret);
}
export function __wbg_requestIdleCallback_1b8d644ff564208f(arg0) {
    const ret = getObject(arg0).requestIdleCallback;
    return addHeapObject(ret);
}
export function __wbg_requestIdleCallback_c9c643f8210d435b() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).requestIdleCallback(getObject(arg1));
    return ret;
}, arguments); }
export function __wbg_resolve_002c4b7d9d8f6b64(arg0) {
    const ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
}
export function __wbg_revokeObjectURL_ba5712ef5af8bc9a() { return handleError(function (arg0, arg1) {
    URL.revokeObjectURL(getStringFromWasm0(arg0, arg1));
}, arguments); }
export function __wbg_scheduler_48482a9974eeacbd(arg0) {
    const ret = getObject(arg0).scheduler;
    return addHeapObject(ret);
}
export function __wbg_scheduler_5156bb61cc1cf589(arg0) {
    const ret = getObject(arg0).scheduler;
    return addHeapObject(ret);
}
export function __wbg_setAttribute_cc8e4c8a2a008508() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments); }
export function __wbg_setBindGroup_0ae63a01a1ed4c73(arg0, arg1, arg2) {
    getObject(arg0).setBindGroup(arg1 >>> 0, getObject(arg2));
}
export function __wbg_setBindGroup_d906e4c5d8533957() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).setBindGroup(arg1 >>> 0, getObject(arg2), getArrayU32FromWasm0(arg3, arg4), arg5, arg6 >>> 0);
}, arguments); }
export function __wbg_setIndexBuffer_db41507e5114fad4(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setIndexBuffer(getObject(arg1), __wbindgen_enum_GpuIndexFormat[arg2], arg3, arg4);
}
export function __wbg_setPipeline_b010841b1ab020c5(arg0, arg1) {
    getObject(arg0).setPipeline(getObject(arg1));
}
export function __wbg_setPointerCapture_420db6f6826eb74b() { return handleError(function (arg0, arg1) {
    getObject(arg0).setPointerCapture(arg1);
}, arguments); }
export function __wbg_setProperty_cbb25c4e74285b39() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setProperty(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments); }
export function __wbg_setScissorRect_48aad86f2b04be65(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setScissorRect(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
}
export function __wbg_setTimeout_681abd84926a4da3() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).setTimeout(getObject(arg1));
    return ret;
}, arguments); }
export function __wbg_setTimeout_eff32631ea138533() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
    return ret;
}, arguments); }
export function __wbg_setVertexBuffer_da6ef21c06e9c5ac(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setVertexBuffer(arg1 >>> 0, getObject(arg2), arg3, arg4);
}
export function __wbg_setViewport_bee857cbfc17f5bf(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).setViewport(arg1, arg2, arg3, arg4, arg5, arg6);
}
export function __wbg_set_25cf9deff6bf0ea8(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
}
export function __wbg_set_6cb8631f80447a67() { return handleError(function (arg0, arg1, arg2) {
    const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    return ret;
}, arguments); }
export function __wbg_set_a_004bf5b9918b7a9d(arg0, arg1) {
    getObject(arg0).a = arg1;
}
export function __wbg_set_access_615d472480b556e8(arg0, arg1) {
    getObject(arg0).access = __wbindgen_enum_GpuStorageTextureAccess[arg1];
}
export function __wbg_set_address_mode_u_f8c82bdfe28ff814(arg0, arg1) {
    getObject(arg0).addressModeU = __wbindgen_enum_GpuAddressMode[arg1];
}
export function __wbg_set_address_mode_v_15cc0a4331c8a793(arg0, arg1) {
    getObject(arg0).addressModeV = __wbindgen_enum_GpuAddressMode[arg1];
}
export function __wbg_set_address_mode_w_b3ede4a69eef8df8(arg0, arg1) {
    getObject(arg0).addressModeW = __wbindgen_enum_GpuAddressMode[arg1];
}
export function __wbg_set_alpha_7c9ec1b9552caf33(arg0, arg1) {
    getObject(arg0).alpha = getObject(arg1);
}
export function __wbg_set_alpha_mode_d776091480150822(arg0, arg1) {
    getObject(arg0).alphaMode = __wbindgen_enum_GpuCanvasAlphaMode[arg1];
}
export function __wbg_set_alpha_to_coverage_enabled_97c65e8e0f0f97f0(arg0, arg1) {
    getObject(arg0).alphaToCoverageEnabled = arg1 !== 0;
}
export function __wbg_set_array_layer_count_4b8708bd126ac758(arg0, arg1) {
    getObject(arg0).arrayLayerCount = arg1 >>> 0;
}
export function __wbg_set_array_stride_89addb9ef89545a3(arg0, arg1) {
    getObject(arg0).arrayStride = arg1;
}
export function __wbg_set_aspect_e672528231f771cb(arg0, arg1) {
    getObject(arg0).aspect = __wbindgen_enum_GpuTextureAspect[arg1];
}
export function __wbg_set_attributes_2ab28c57eed0dc3a(arg0, arg1) {
    getObject(arg0).attributes = getObject(arg1);
}
export function __wbg_set_b_b2b86286be8253f1(arg0, arg1) {
    getObject(arg0).b = arg1;
}
export function __wbg_set_base_array_layer_a3268c17b424196f(arg0, arg1) {
    getObject(arg0).baseArrayLayer = arg1 >>> 0;
}
export function __wbg_set_base_mip_level_7ac60a20e24c81b1(arg0, arg1) {
    getObject(arg0).baseMipLevel = arg1 >>> 0;
}
export function __wbg_set_beginning_of_pass_write_index_87e36fb6887d3c1c(arg0, arg1) {
    getObject(arg0).beginningOfPassWriteIndex = arg1 >>> 0;
}
export function __wbg_set_bind_group_layouts_7fedf360e81319eb(arg0, arg1) {
    getObject(arg0).bindGroupLayouts = getObject(arg1);
}
export function __wbg_set_binding_030f427cbe0e3a55(arg0, arg1) {
    getObject(arg0).binding = arg1 >>> 0;
}
export function __wbg_set_binding_69fdec34b16b327b(arg0, arg1) {
    getObject(arg0).binding = arg1 >>> 0;
}
export function __wbg_set_blend_c6896375c7f0119c(arg0, arg1) {
    getObject(arg0).blend = getObject(arg1);
}
export function __wbg_set_box_73d3355c6f95f24d(arg0, arg1) {
    getObject(arg0).box = __wbindgen_enum_ResizeObserverBoxOptions[arg1];
}
export function __wbg_set_buffer_b79f2efcb24ba844(arg0, arg1) {
    getObject(arg0).buffer = getObject(arg1);
}
export function __wbg_set_buffer_c23b131bfa95f222(arg0, arg1) {
    getObject(arg0).buffer = getObject(arg1);
}
export function __wbg_set_buffers_14ec06929ea541ec(arg0, arg1) {
    getObject(arg0).buffers = getObject(arg1);
}
export function __wbg_set_bytes_per_row_fbb55671d2ba86f2(arg0, arg1) {
    getObject(arg0).bytesPerRow = arg1 >>> 0;
}
export function __wbg_set_clear_value_829dfd0db30aaeac(arg0, arg1) {
    getObject(arg0).clearValue = getObject(arg1);
}
export function __wbg_set_code_09748e5373b711b2(arg0, arg1, arg2) {
    getObject(arg0).code = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_color_96b2f28b4f51fceb(arg0, arg1) {
    getObject(arg0).color = getObject(arg1);
}
export function __wbg_set_color_attachments_ee51f860224ee6dd(arg0, arg1) {
    getObject(arg0).colorAttachments = getObject(arg1);
}
export function __wbg_set_compare_61125878543846d0(arg0, arg1) {
    getObject(arg0).compare = __wbindgen_enum_GpuCompareFunction[arg1];
}
export function __wbg_set_compare_eb86f2890782b20b(arg0, arg1) {
    getObject(arg0).compare = __wbindgen_enum_GpuCompareFunction[arg1];
}
export function __wbg_set_count_4d43f3f3ab7f952d(arg0, arg1) {
    getObject(arg0).count = arg1 >>> 0;
}
export function __wbg_set_cull_mode_4e0bb3799474c091(arg0, arg1) {
    getObject(arg0).cullMode = __wbindgen_enum_GpuCullMode[arg1];
}
export function __wbg_set_depth_bias_clamp_5375d337b8b35cd8(arg0, arg1) {
    getObject(arg0).depthBiasClamp = arg1;
}
export function __wbg_set_depth_bias_ea8b79f02442c9c7(arg0, arg1) {
    getObject(arg0).depthBias = arg1;
}
export function __wbg_set_depth_bias_slope_scale_0493feedbe6ad438(arg0, arg1) {
    getObject(arg0).depthBiasSlopeScale = arg1;
}
export function __wbg_set_depth_clear_value_20534499c6507e19(arg0, arg1) {
    getObject(arg0).depthClearValue = arg1;
}
export function __wbg_set_depth_compare_00e8b65c01d4bf03(arg0, arg1) {
    getObject(arg0).depthCompare = __wbindgen_enum_GpuCompareFunction[arg1];
}
export function __wbg_set_depth_fail_op_765de27464903fd0(arg0, arg1) {
    getObject(arg0).depthFailOp = __wbindgen_enum_GpuStencilOperation[arg1];
}
export function __wbg_set_depth_load_op_33c128108a7dc8f1(arg0, arg1) {
    getObject(arg0).depthLoadOp = __wbindgen_enum_GpuLoadOp[arg1];
}
export function __wbg_set_depth_or_array_layers_58d45a4c8cd4f655(arg0, arg1) {
    getObject(arg0).depthOrArrayLayers = arg1 >>> 0;
}
export function __wbg_set_depth_read_only_60990818c939df42(arg0, arg1) {
    getObject(arg0).depthReadOnly = arg1 !== 0;
}
export function __wbg_set_depth_stencil_2e141a5dfe91878d(arg0, arg1) {
    getObject(arg0).depthStencil = getObject(arg1);
}
export function __wbg_set_depth_stencil_attachment_47273ec480dd9bb3(arg0, arg1) {
    getObject(arg0).depthStencilAttachment = getObject(arg1);
}
export function __wbg_set_depth_store_op_9cf32660e51edb87(arg0, arg1) {
    getObject(arg0).depthStoreOp = __wbindgen_enum_GpuStoreOp[arg1];
}
export function __wbg_set_depth_write_enabled_2757b4106a089684(arg0, arg1) {
    getObject(arg0).depthWriteEnabled = arg1 !== 0;
}
export function __wbg_set_device_c2cb3231e445ef7c(arg0, arg1) {
    getObject(arg0).device = getObject(arg1);
}
export function __wbg_set_dimension_0bc5536bd1965aea(arg0, arg1) {
    getObject(arg0).dimension = __wbindgen_enum_GpuTextureDimension[arg1];
}
export function __wbg_set_dimension_c7429fee9721a104(arg0, arg1) {
    getObject(arg0).dimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
}
export function __wbg_set_dst_factor_976f0a83fd6ab733(arg0, arg1) {
    getObject(arg0).dstFactor = __wbindgen_enum_GpuBlendFactor[arg1];
}
export function __wbg_set_end_of_pass_write_index_3cc5a7a3f6819a03(arg0, arg1) {
    getObject(arg0).endOfPassWriteIndex = arg1 >>> 0;
}
export function __wbg_set_entries_01031c155d815ef1(arg0, arg1) {
    getObject(arg0).entries = getObject(arg1);
}
export function __wbg_set_entries_8f49811ca79d7dbf(arg0, arg1) {
    getObject(arg0).entries = getObject(arg1);
}
export function __wbg_set_entry_point_1da27599bf796782(arg0, arg1, arg2) {
    getObject(arg0).entryPoint = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_entry_point_670e208336b80723(arg0, arg1, arg2) {
    getObject(arg0).entryPoint = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_external_texture_66700d1d2537a6de(arg0, arg1) {
    getObject(arg0).externalTexture = getObject(arg1);
}
export function __wbg_set_fail_op_9de9bf69ac6682e3(arg0, arg1) {
    getObject(arg0).failOp = __wbindgen_enum_GpuStencilOperation[arg1];
}
export function __wbg_set_format_10a5222e02236027(arg0, arg1) {
    getObject(arg0).format = __wbindgen_enum_GpuTextureFormat[arg1];
}
export function __wbg_set_format_37627c6070d0ecfc(arg0, arg1) {
    getObject(arg0).format = __wbindgen_enum_GpuTextureFormat[arg1];
}
export function __wbg_set_format_3c7d4bce3fb94de5(arg0, arg1) {
    getObject(arg0).format = __wbindgen_enum_GpuTextureFormat[arg1];
}
export function __wbg_set_format_47fd2845afca8e1a(arg0, arg1) {
    getObject(arg0).format = __wbindgen_enum_GpuTextureFormat[arg1];
}
export function __wbg_set_format_72e1ce883fb57e05(arg0, arg1) {
    getObject(arg0).format = __wbindgen_enum_GpuTextureFormat[arg1];
}
export function __wbg_set_format_877a89e3431cb656(arg0, arg1) {
    getObject(arg0).format = __wbindgen_enum_GpuVertexFormat[arg1];
}
export function __wbg_set_format_ee418ce830040f4d(arg0, arg1) {
    getObject(arg0).format = __wbindgen_enum_GpuTextureFormat[arg1];
}
export function __wbg_set_fragment_616c1d1c0db9abd4(arg0, arg1) {
    getObject(arg0).fragment = getObject(arg1);
}
export function __wbg_set_front_face_a1a0e940bd9fa3d0(arg0, arg1) {
    getObject(arg0).frontFace = __wbindgen_enum_GpuFrontFace[arg1];
}
export function __wbg_set_g_9ab482dfe9422850(arg0, arg1) {
    getObject(arg0).g = arg1;
}
export function __wbg_set_has_dynamic_offset_21302a736944b6d9(arg0, arg1) {
    getObject(arg0).hasDynamicOffset = arg1 !== 0;
}
export function __wbg_set_height_b386c0f603610637(arg0, arg1) {
    getObject(arg0).height = arg1 >>> 0;
}
export function __wbg_set_height_cd4d12f9029588ee(arg0, arg1) {
    getObject(arg0).height = arg1 >>> 0;
}
export function __wbg_set_height_f21f985387070100(arg0, arg1) {
    getObject(arg0).height = arg1 >>> 0;
}
export function __wbg_set_label_0b21604c6a585153(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_1b7e4bc9d67c38b4(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_2e55e1407bac5ba2(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_407c8b09134f4f1d(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_5dc53fac7117f697(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_8e88157a8e30ddcd(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_a56a46194be79e8d(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_a6c76bf653812d73(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_ae972d3c351c79ec(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_b1b0d28716686810(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_cabc4eccde1e89fd(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_d90e07589bdb8f1a(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_e69d774bf38947d2(arg0, arg1, arg2) {
    getObject(arg0).label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_layout_3a36319a5990c8b7(arg0, arg1) {
    getObject(arg0).layout = getObject(arg1);
}
export function __wbg_set_layout_ac044d38ca30f520(arg0, arg1) {
    getObject(arg0).layout = getObject(arg1);
}
export function __wbg_set_load_op_d48e31970a7bdf9b(arg0, arg1) {
    getObject(arg0).loadOp = __wbindgen_enum_GpuLoadOp[arg1];
}
export function __wbg_set_lod_max_clamp_150813b458d7989c(arg0, arg1) {
    getObject(arg0).lodMaxClamp = arg1;
}
export function __wbg_set_lod_min_clamp_444adbc1645f8521(arg0, arg1) {
    getObject(arg0).lodMinClamp = arg1;
}
export function __wbg_set_mag_filter_4ce311d0e097cca4(arg0, arg1) {
    getObject(arg0).magFilter = __wbindgen_enum_GpuFilterMode[arg1];
}
export function __wbg_set_mapped_at_creation_34e7f793131eefbb(arg0, arg1) {
    getObject(arg0).mappedAtCreation = arg1 !== 0;
}
export function __wbg_set_mask_a51cdf9e56393e94(arg0, arg1) {
    getObject(arg0).mask = arg1 >>> 0;
}
export function __wbg_set_max_anisotropy_5be6e383b6e6632b(arg0, arg1) {
    getObject(arg0).maxAnisotropy = arg1;
}
export function __wbg_set_min_binding_size_f9a65ac1a20ab955(arg0, arg1) {
    getObject(arg0).minBindingSize = arg1;
}
export function __wbg_set_min_filter_87ee94d6dcfdc3d8(arg0, arg1) {
    getObject(arg0).minFilter = __wbindgen_enum_GpuFilterMode[arg1];
}
export function __wbg_set_mip_level_2d7e962e91fd1c33(arg0, arg1) {
    getObject(arg0).mipLevel = arg1 >>> 0;
}
export function __wbg_set_mip_level_count_32bbfdc1aebc8dd3(arg0, arg1) {
    getObject(arg0).mipLevelCount = arg1 >>> 0;
}
export function __wbg_set_mip_level_count_79f47bf6140098e5(arg0, arg1) {
    getObject(arg0).mipLevelCount = arg1 >>> 0;
}
export function __wbg_set_mipmap_filter_1739c7c215847dc1(arg0, arg1) {
    getObject(arg0).mipmapFilter = __wbindgen_enum_GpuMipmapFilterMode[arg1];
}
export function __wbg_set_module_8ff6ea5431317fde(arg0, arg1) {
    getObject(arg0).module = getObject(arg1);
}
export function __wbg_set_module_dae95bb56c7d6ee9(arg0, arg1) {
    getObject(arg0).module = getObject(arg1);
}
export function __wbg_set_multisample_156e854358e208ff(arg0, arg1) {
    getObject(arg0).multisample = getObject(arg1);
}
export function __wbg_set_multisampled_775f1e38d554a0f4(arg0, arg1) {
    getObject(arg0).multisampled = arg1 !== 0;
}
export function __wbg_set_offset_25f624abc0979ae4(arg0, arg1) {
    getObject(arg0).offset = arg1;
}
export function __wbg_set_offset_9ed8011d53037f93(arg0, arg1) {
    getObject(arg0).offset = arg1;
}
export function __wbg_set_offset_d27243aad0b0b017(arg0, arg1) {
    getObject(arg0).offset = arg1;
}
export function __wbg_set_onmessage_0e1ffb1c0d91d2ad(arg0, arg1) {
    getObject(arg0).onmessage = getObject(arg1);
}
export function __wbg_set_operation_2ad26b5d94a70e63(arg0, arg1) {
    getObject(arg0).operation = __wbindgen_enum_GpuBlendOperation[arg1];
}
export function __wbg_set_origin_142f4ec35ba3f8da(arg0, arg1) {
    getObject(arg0).origin = getObject(arg1);
}
export function __wbg_set_pass_op_25209e5db7ec5d4b(arg0, arg1) {
    getObject(arg0).passOp = __wbindgen_enum_GpuStencilOperation[arg1];
}
export function __wbg_set_power_preference_2f983dce6d983584(arg0, arg1) {
    getObject(arg0).powerPreference = __wbindgen_enum_GpuPowerPreference[arg1];
}
export function __wbg_set_primitive_cc91060b2752c577(arg0, arg1) {
    getObject(arg0).primitive = getObject(arg1);
}
export function __wbg_set_query_set_e258abc9e7072a65(arg0, arg1) {
    getObject(arg0).querySet = getObject(arg1);
}
export function __wbg_set_r_4943e4c720ff77ca(arg0, arg1) {
    getObject(arg0).r = arg1;
}
export function __wbg_set_required_features_52447a9e50ed9b36(arg0, arg1) {
    getObject(arg0).requiredFeatures = getObject(arg1);
}
export function __wbg_set_resolve_target_28603a69bca08e48(arg0, arg1) {
    getObject(arg0).resolveTarget = getObject(arg1);
}
export function __wbg_set_resource_0b72a17db4105dcc(arg0, arg1) {
    getObject(arg0).resource = getObject(arg1);
}
export function __wbg_set_rows_per_image_2388f2cfec4ea946(arg0, arg1) {
    getObject(arg0).rowsPerImage = arg1 >>> 0;
}
export function __wbg_set_sample_count_1cd165278e1081cb(arg0, arg1) {
    getObject(arg0).sampleCount = arg1 >>> 0;
}
export function __wbg_set_sample_type_5656761d1d13c084(arg0, arg1) {
    getObject(arg0).sampleType = __wbindgen_enum_GpuTextureSampleType[arg1];
}
export function __wbg_set_sampler_9559ad3dd242f711(arg0, arg1) {
    getObject(arg0).sampler = getObject(arg1);
}
export function __wbg_set_shader_location_2ee098966925fd00(arg0, arg1) {
    getObject(arg0).shaderLocation = arg1 >>> 0;
}
export function __wbg_set_size_a43ef8b3ef024e2c(arg0, arg1) {
    getObject(arg0).size = getObject(arg1);
}
export function __wbg_set_size_d3baf773adcc6357(arg0, arg1) {
    getObject(arg0).size = arg1;
}
export function __wbg_set_size_fadeb2bddc7e6f67(arg0, arg1) {
    getObject(arg0).size = arg1;
}
export function __wbg_set_src_factor_ebc4adbcb746fedc(arg0, arg1) {
    getObject(arg0).srcFactor = __wbindgen_enum_GpuBlendFactor[arg1];
}
export function __wbg_set_stencil_back_51d5377faff8840b(arg0, arg1) {
    getObject(arg0).stencilBack = getObject(arg1);
}
export function __wbg_set_stencil_clear_value_21847cbc9881e39b(arg0, arg1) {
    getObject(arg0).stencilClearValue = arg1 >>> 0;
}
export function __wbg_set_stencil_front_115e8b375153cc55(arg0, arg1) {
    getObject(arg0).stencilFront = getObject(arg1);
}
export function __wbg_set_stencil_load_op_3531e7e23b9c735e(arg0, arg1) {
    getObject(arg0).stencilLoadOp = __wbindgen_enum_GpuLoadOp[arg1];
}
export function __wbg_set_stencil_read_mask_6022bedf9e54ec0d(arg0, arg1) {
    getObject(arg0).stencilReadMask = arg1 >>> 0;
}
export function __wbg_set_stencil_read_only_beb27fbf4ca9b6e4(arg0, arg1) {
    getObject(arg0).stencilReadOnly = arg1 !== 0;
}
export function __wbg_set_stencil_store_op_7b3259ed6b9d76ca(arg0, arg1) {
    getObject(arg0).stencilStoreOp = __wbindgen_enum_GpuStoreOp[arg1];
}
export function __wbg_set_stencil_write_mask_294d575eb0e2fd6f(arg0, arg1) {
    getObject(arg0).stencilWriteMask = arg1 >>> 0;
}
export function __wbg_set_step_mode_5b6d687e55df5dd0(arg0, arg1) {
    getObject(arg0).stepMode = __wbindgen_enum_GpuVertexStepMode[arg1];
}
export function __wbg_set_storage_texture_b2963724a23aca9b(arg0, arg1) {
    getObject(arg0).storageTexture = getObject(arg1);
}
export function __wbg_set_store_op_e1b7633c5612534a(arg0, arg1) {
    getObject(arg0).storeOp = __wbindgen_enum_GpuStoreOp[arg1];
}
export function __wbg_set_strip_index_format_6d0c95e2646c52d1(arg0, arg1) {
    getObject(arg0).stripIndexFormat = __wbindgen_enum_GpuIndexFormat[arg1];
}
export function __wbg_set_targets_9f867a93d09515a9(arg0, arg1) {
    getObject(arg0).targets = getObject(arg1);
}
export function __wbg_set_texture_08516f643ed9f7ef(arg0, arg1) {
    getObject(arg0).texture = getObject(arg1);
}
export function __wbg_set_texture_fbeffa5f2e57db49(arg0, arg1) {
    getObject(arg0).texture = getObject(arg1);
}
export function __wbg_set_timestamp_writes_94da76b5f3fee792(arg0, arg1) {
    getObject(arg0).timestampWrites = getObject(arg1);
}
export function __wbg_set_topology_0ef9190b0c51fc78(arg0, arg1) {
    getObject(arg0).topology = __wbindgen_enum_GpuPrimitiveTopology[arg1];
}
export function __wbg_set_type_148de20768639245(arg0, arg1, arg2) {
    getObject(arg0).type = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_type_657cd6d704dbc037(arg0, arg1) {
    getObject(arg0).type = __wbindgen_enum_GpuBufferBindingType[arg1];
}
export function __wbg_set_type_c9565dd4ebe21c60(arg0, arg1) {
    getObject(arg0).type = __wbindgen_enum_GpuSamplerBindingType[arg1];
}
export function __wbg_set_unclipped_depth_936bc9a32a318b94(arg0, arg1) {
    getObject(arg0).unclippedDepth = arg1 !== 0;
}
export function __wbg_set_usage_500c45ebe8b0bbf2(arg0, arg1) {
    getObject(arg0).usage = arg1 >>> 0;
}
export function __wbg_set_usage_9c6ccd6bcc15f735(arg0, arg1) {
    getObject(arg0).usage = arg1 >>> 0;
}
export function __wbg_set_usage_b84e5d16af27594a(arg0, arg1) {
    getObject(arg0).usage = arg1 >>> 0;
}
export function __wbg_set_usage_e2790ec1205a5e27(arg0, arg1) {
    getObject(arg0).usage = arg1 >>> 0;
}
export function __wbg_set_vertex_9c9752039687305f(arg0, arg1) {
    getObject(arg0).vertex = getObject(arg1);
}
export function __wbg_set_view_5aa6ed9f881b63f2(arg0, arg1) {
    getObject(arg0).view = getObject(arg1);
}
export function __wbg_set_view_820375e4a740874f(arg0, arg1) {
    getObject(arg0).view = getObject(arg1);
}
export function __wbg_set_view_dimension_6ba3ac8e6bedbcb4(arg0, arg1) {
    getObject(arg0).viewDimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
}
export function __wbg_set_view_dimension_95e6461d131f7086(arg0, arg1) {
    getObject(arg0).viewDimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
}
export function __wbg_set_view_formats_6533614c7017475e(arg0, arg1) {
    getObject(arg0).viewFormats = getObject(arg1);
}
export function __wbg_set_view_formats_ff46db459c40096d(arg0, arg1) {
    getObject(arg0).viewFormats = getObject(arg1);
}
export function __wbg_set_visibility_deca18896989c982(arg0, arg1) {
    getObject(arg0).visibility = arg1 >>> 0;
}
export function __wbg_set_width_07eabc802de7b030(arg0, arg1) {
    getObject(arg0).width = arg1 >>> 0;
}
export function __wbg_set_width_7f07715a20503914(arg0, arg1) {
    getObject(arg0).width = arg1 >>> 0;
}
export function __wbg_set_width_d60bc4f2f20c56a4(arg0, arg1) {
    getObject(arg0).width = arg1 >>> 0;
}
export function __wbg_set_write_mask_122c167c45bb2d8e(arg0, arg1) {
    getObject(arg0).writeMask = arg1 >>> 0;
}
export function __wbg_set_x_cc281962ce68ef00(arg0, arg1) {
    getObject(arg0).x = arg1 >>> 0;
}
export function __wbg_set_y_7d6f1f0a01ce4000(arg0, arg1) {
    getObject(arg0).y = arg1 >>> 0;
}
export function __wbg_set_z_b316da2a41e7822f(arg0, arg1) {
    getObject(arg0).z = arg1 >>> 0;
}
export function __wbg_shiftKey_5558a3288542c985(arg0) {
    const ret = getObject(arg0).shiftKey;
    return ret;
}
export function __wbg_shiftKey_564be91ec842bcc4(arg0) {
    const ret = getObject(arg0).shiftKey;
    return ret;
}
export function __wbg_signal_d1285ecab4ebc5ad(arg0) {
    const ret = getObject(arg0).signal;
    return addHeapObject(ret);
}
export function __wbg_size_beea1890c315fb17(arg0) {
    const ret = getObject(arg0).size;
    return ret;
}
export function __wbg_stack_0ed75d68575b0f3c(arg0, arg1) {
    const ret = getObject(arg1).stack;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_start_ffb4b426b1e661bd(arg0) {
    getObject(arg0).start();
}
export function __wbg_static_accessor_GLOBAL_12837167ad935116() {
    const ret = typeof global === 'undefined' ? null : global;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f() {
    const ret = typeof globalThis === 'undefined' ? null : globalThis;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_static_accessor_SELF_a621d3dfbb60d0ce() {
    const ret = typeof self === 'undefined' ? null : self;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_static_accessor_WINDOW_f8727f0cf888e0bd() {
    const ret = typeof window === 'undefined' ? null : window;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_style_0b7c9bd318f8b807(arg0) {
    const ret = getObject(arg0).style;
    return addHeapObject(ret);
}
export function __wbg_submit_3ecd36be9abeba75(arg0, arg1) {
    getObject(arg0).submit(getObject(arg1));
}
export function __wbg_then_0d9fe2c7b1857d32(arg0, arg1, arg2) {
    const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}
export function __wbg_then_b9e7b3b5f1a9e1b5(arg0, arg1) {
    const ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
}
export function __wbg_unmap_2903d5b193373f12(arg0) {
    getObject(arg0).unmap();
}
export function __wbg_unobserve_b4eb8d945252124f(arg0, arg1) {
    getObject(arg0).unobserve(getObject(arg1));
}
export function __wbg_usage_7b00ab14a235fa77(arg0) {
    const ret = getObject(arg0).usage;
    return ret;
}
export function __wbg_userAgentData_f7b0e61c05c54315(arg0) {
    const ret = getObject(arg0).userAgentData;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_userAgent_34463fd660ba4a2a() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg1).userAgent;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_visibilityState_43b7b74940e07d22(arg0) {
    const ret = getObject(arg0).visibilityState;
    return (__wbindgen_enum_VisibilityState.indexOf(ret) + 1 || 3) - 1;
}
export function __wbg_warn_f7ae1b2e66ccb930(arg0) {
    console.warn(getObject(arg0));
}
export function __wbg_webkitFullscreenElement_a9ca38b7214d1567(arg0) {
    const ret = getObject(arg0).webkitFullscreenElement;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}
export function __wbg_webkitRequestFullscreen_23664c63833ff0e5(arg0) {
    getObject(arg0).webkitRequestFullscreen();
}
export function __wbg_width_7444cca5dfea0645(arg0) {
    const ret = getObject(arg0).width;
    return ret;
}
export function __wbg_writeBuffer_1897edb8e6677e9a() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).writeBuffer(getObject(arg1), arg2, getObject(arg3), arg4, arg5);
}, arguments); }
export function __wbg_writeTexture_e6008247063eadbf() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).writeTexture(getObject(arg1), getObject(arg2), getObject(arg3), getObject(arg4));
}, arguments); }
export function __wbindgen_cast_0000000000000001(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 599, function: Function { arguments: [NamedExternref("Array<any>"), NamedExternref("ResizeObserver")], shim_idx: 609, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_2572, __wasm_bindgen_func_elem_2823);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000002(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 599, function: Function { arguments: [NamedExternref("Array<any>")], shim_idx: 602, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_2572, __wasm_bindgen_func_elem_2816);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000003(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 599, function: Function { arguments: [NamedExternref("Event")], shim_idx: 602, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_2572, __wasm_bindgen_func_elem_2816);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000004(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 599, function: Function { arguments: [NamedExternref("FocusEvent")], shim_idx: 602, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_2572, __wasm_bindgen_func_elem_2816);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000005(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 599, function: Function { arguments: [NamedExternref("KeyboardEvent")], shim_idx: 602, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_2572, __wasm_bindgen_func_elem_2816);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000006(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 599, function: Function { arguments: [NamedExternref("PageTransitionEvent")], shim_idx: 602, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_2572, __wasm_bindgen_func_elem_2816);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000007(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 599, function: Function { arguments: [NamedExternref("PointerEvent")], shim_idx: 602, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_2572, __wasm_bindgen_func_elem_2816);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000008(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 599, function: Function { arguments: [NamedExternref("WheelEvent")], shim_idx: 602, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_2572, __wasm_bindgen_func_elem_2816);
    return addHeapObject(ret);
}
export function __wbindgen_cast_0000000000000009(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 599, function: Function { arguments: [], shim_idx: 600, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_2572, __wasm_bindgen_func_elem_2814);
    return addHeapObject(ret);
}
export function __wbindgen_cast_000000000000000a(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { dtor_idx: 670, function: Function { arguments: [Externref], shim_idx: 671, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm.__wasm_bindgen_func_elem_3786, __wasm_bindgen_func_elem_3787);
    return addHeapObject(ret);
}
export function __wbindgen_cast_000000000000000b(arg0) {
    // Cast intrinsic for `F64 -> Externref`.
    const ret = arg0;
    return addHeapObject(ret);
}
export function __wbindgen_cast_000000000000000c(arg0, arg1) {
    // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
    const ret = getArrayU8FromWasm0(arg0, arg1);
    return addHeapObject(ret);
}
export function __wbindgen_cast_000000000000000d(arg0, arg1) {
    // Cast intrinsic for `Ref(String) -> Externref`.
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
}
export function __wbindgen_object_clone_ref(arg0) {
    const ret = getObject(arg0);
    return addHeapObject(ret);
}
export function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
}
function __wasm_bindgen_func_elem_2814(arg0, arg1) {
    wasm.__wasm_bindgen_func_elem_2814(arg0, arg1);
}

function __wasm_bindgen_func_elem_2816(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_2816(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_3787(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_3787(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_2823(arg0, arg1, arg2, arg3) {
    wasm.__wasm_bindgen_func_elem_2823(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}


const __wbindgen_enum_GpuAddressMode = ["clamp-to-edge", "repeat", "mirror-repeat"];


const __wbindgen_enum_GpuBlendFactor = ["zero", "one", "src", "one-minus-src", "src-alpha", "one-minus-src-alpha", "dst", "one-minus-dst", "dst-alpha", "one-minus-dst-alpha", "src-alpha-saturated", "constant", "one-minus-constant", "src1", "one-minus-src1", "src1-alpha", "one-minus-src1-alpha"];


const __wbindgen_enum_GpuBlendOperation = ["add", "subtract", "reverse-subtract", "min", "max"];


const __wbindgen_enum_GpuBufferBindingType = ["uniform", "storage", "read-only-storage"];


const __wbindgen_enum_GpuCanvasAlphaMode = ["opaque", "premultiplied"];


const __wbindgen_enum_GpuCompareFunction = ["never", "less", "equal", "less-equal", "greater", "not-equal", "greater-equal", "always"];


const __wbindgen_enum_GpuCullMode = ["none", "front", "back"];


const __wbindgen_enum_GpuFilterMode = ["nearest", "linear"];


const __wbindgen_enum_GpuFrontFace = ["ccw", "cw"];


const __wbindgen_enum_GpuIndexFormat = ["uint16", "uint32"];


const __wbindgen_enum_GpuLoadOp = ["load", "clear"];


const __wbindgen_enum_GpuMipmapFilterMode = ["nearest", "linear"];


const __wbindgen_enum_GpuPowerPreference = ["low-power", "high-performance"];


const __wbindgen_enum_GpuPrimitiveTopology = ["point-list", "line-list", "line-strip", "triangle-list", "triangle-strip"];


const __wbindgen_enum_GpuSamplerBindingType = ["filtering", "non-filtering", "comparison"];


const __wbindgen_enum_GpuStencilOperation = ["keep", "zero", "replace", "invert", "increment-clamp", "decrement-clamp", "increment-wrap", "decrement-wrap"];


const __wbindgen_enum_GpuStorageTextureAccess = ["write-only", "read-only", "read-write"];


const __wbindgen_enum_GpuStoreOp = ["store", "discard"];


const __wbindgen_enum_GpuTextureAspect = ["all", "stencil-only", "depth-only"];


const __wbindgen_enum_GpuTextureDimension = ["1d", "2d", "3d"];


const __wbindgen_enum_GpuTextureFormat = ["r8unorm", "r8snorm", "r8uint", "r8sint", "r16uint", "r16sint", "r16float", "rg8unorm", "rg8snorm", "rg8uint", "rg8sint", "r32uint", "r32sint", "r32float", "rg16uint", "rg16sint", "rg16float", "rgba8unorm", "rgba8unorm-srgb", "rgba8snorm", "rgba8uint", "rgba8sint", "bgra8unorm", "bgra8unorm-srgb", "rgb9e5ufloat", "rgb10a2uint", "rgb10a2unorm", "rg11b10ufloat", "rg32uint", "rg32sint", "rg32float", "rgba16uint", "rgba16sint", "rgba16float", "rgba32uint", "rgba32sint", "rgba32float", "stencil8", "depth16unorm", "depth24plus", "depth24plus-stencil8", "depth32float", "depth32float-stencil8", "bc1-rgba-unorm", "bc1-rgba-unorm-srgb", "bc2-rgba-unorm", "bc2-rgba-unorm-srgb", "bc3-rgba-unorm", "bc3-rgba-unorm-srgb", "bc4-r-unorm", "bc4-r-snorm", "bc5-rg-unorm", "bc5-rg-snorm", "bc6h-rgb-ufloat", "bc6h-rgb-float", "bc7-rgba-unorm", "bc7-rgba-unorm-srgb", "etc2-rgb8unorm", "etc2-rgb8unorm-srgb", "etc2-rgb8a1unorm", "etc2-rgb8a1unorm-srgb", "etc2-rgba8unorm", "etc2-rgba8unorm-srgb", "eac-r11unorm", "eac-r11snorm", "eac-rg11unorm", "eac-rg11snorm", "astc-4x4-unorm", "astc-4x4-unorm-srgb", "astc-5x4-unorm", "astc-5x4-unorm-srgb", "astc-5x5-unorm", "astc-5x5-unorm-srgb", "astc-6x5-unorm", "astc-6x5-unorm-srgb", "astc-6x6-unorm", "astc-6x6-unorm-srgb", "astc-8x5-unorm", "astc-8x5-unorm-srgb", "astc-8x6-unorm", "astc-8x6-unorm-srgb", "astc-8x8-unorm", "astc-8x8-unorm-srgb", "astc-10x5-unorm", "astc-10x5-unorm-srgb", "astc-10x6-unorm", "astc-10x6-unorm-srgb", "astc-10x8-unorm", "astc-10x8-unorm-srgb", "astc-10x10-unorm", "astc-10x10-unorm-srgb", "astc-12x10-unorm", "astc-12x10-unorm-srgb", "astc-12x12-unorm", "astc-12x12-unorm-srgb"];


const __wbindgen_enum_GpuTextureSampleType = ["float", "unfilterable-float", "depth", "sint", "uint"];


const __wbindgen_enum_GpuTextureViewDimension = ["1d", "2d", "2d-array", "cube", "cube-array", "3d"];


const __wbindgen_enum_GpuVertexFormat = ["uint8", "uint8x2", "uint8x4", "sint8", "sint8x2", "sint8x4", "unorm8", "unorm8x2", "unorm8x4", "snorm8", "snorm8x2", "snorm8x4", "uint16", "uint16x2", "uint16x4", "sint16", "sint16x2", "sint16x4", "unorm16", "unorm16x2", "unorm16x4", "snorm16", "snorm16x2", "snorm16x4", "float16", "float16x2", "float16x4", "float32", "float32x2", "float32x3", "float32x4", "uint32", "uint32x2", "uint32x3", "uint32x4", "sint32", "sint32x2", "sint32x3", "sint32x4", "unorm10-10-10-2", "unorm8x4-bgra"];


const __wbindgen_enum_GpuVertexStepMode = ["vertex", "instance"];


const __wbindgen_enum_ResizeObserverBoxOptions = ["border-box", "content-box", "device-pixel-content-box"];


const __wbindgen_enum_VisibilityState = ["hidden", "visible"];

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => state.dtor(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function getArrayU32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint32ArrayMemory0 = null;
function getUint32ArrayMemory0() {
    if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
        cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32ArrayMemory0;
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getObject(idx) { return heap[idx]; }

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_export3(addHeapObject(e));
    }
}

let heap = new Array(128).fill(undefined);
heap.push(undefined, null, true, false);

let heap_next = heap.length;

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            state.dtor(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;


let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}
