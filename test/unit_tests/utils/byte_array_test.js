/**
 * @fileoverview ByteArray tests.
 *
 * @license Copyright 2015 The Coding with Chrome Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author mbordihn@google.com (Markus Bordihn)
 */
goog.require('cwc.utils.ByteArray');
goog.require('cwc.utils.ByteArrayTypes');


describe('ByteArray', function() {
  let byteHeader = Math.random();
  let indexHeader = Math.random();
  let integerHeader = Math.random();
  let shortHeader = Math.random();
  let stringHeader = Math.random();
  let byteArray = new cwc.utils.ByteArray();

  it('opt_header', function() {
    byteArray.setHeader(cwc.utils.ByteArrayTypes.BYTE, byteHeader);
    byteArray.setHeader(cwc.utils.ByteArrayTypes.SHORT, shortHeader);
    byteArray.setHeader(cwc.utils.ByteArrayTypes.INT, integerHeader);
    byteArray.setHeader(cwc.utils.ByteArrayTypes.INDEX, indexHeader);
    byteArray.setHeader(cwc.utils.ByteArrayTypes.STR, stringHeader);

    expect(byteArray.getHeader(cwc.utils.ByteArrayTypes.BYTE))
      .toBe(byteHeader);
    expect(byteArray.getHeader(cwc.utils.ByteArrayTypes.SHORT))
      .toBe(shortHeader);
    expect(byteArray.getHeader(cwc.utils.ByteArrayTypes.INT))
      .toBe(integerHeader);
    expect(byteArray.getHeader(cwc.utils.ByteArrayTypes.INDEX))
      .toBe(indexHeader);
    expect(byteArray.getHeader(cwc.utils.ByteArrayTypes.STR))
      .toBe(stringHeader);
  });

  it('clearData', function() {
    byteArray.clearData();
    expect(byteArray.getData()).toEqual([]);
  });
});
