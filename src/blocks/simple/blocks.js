/**
 * @fileoverview Simple Blocks for Blockly.
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


/**
 * Write text.
 */
Blockly.Blocks['simple_text_write'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(290);
    this.appendValueInput('text')
      .setCheck('String')
      .appendField(i18t('write('));
    this.appendDummyInput()
      .appendField(')');
    this.setPreviousStatement(true, ['Number', 'String']);
    this.setNextStatement(true, ['Number', 'String']);
    this.setTooltip(i18t('Writes the text on the screen.'));
  },
};


/**
 * Write line.
 */
Blockly.Blocks['simple_text_write_line'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(290);
    this.appendValueInput('text')
      .setCheck('String')
      .appendField(i18t('writeLine('));
    this.appendDummyInput()
      .appendField(')');
    this.setPreviousStatement(true, ['Number', 'String']);
    this.setNextStatement(true, ['Number', 'String']);
    this.setTooltip(i18t('Writes the text on its own line on the screen.'));
  },
};


/**
 * Draw circle.
 */
Blockly.Blocks['simple_draw_circle'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendValueInput('x')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('Circle (x,'));
    this.appendValueInput('y')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('y,');
    this.appendValueInput('radius')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('radius,'));
    this.appendValueInput('fillColor')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('color,'));
    this.appendValueInput('borderColor')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('border_color,'));
    this.appendValueInput('borderSize')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('border_size)'));
    this.setPreviousStatement(true, ['Number', 'String']);
    this.setNextStatement(true, ['Number', 'String']);
    this.setTooltip(i18t('Draws an circle on the screen.'));
  },
};


/**
 * Clear screen.
 */
Blockly.Blocks['simple_draw_clear'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendDummyInput().appendField(i18t('clear ()'));
    this.setPreviousStatement(true, ['Number', 'String']);
    this.setNextStatement(true, ['Number', 'String']);
    this.setTooltip(i18t('Clears the screen.'));
  },
};


/**
 * Draw rectangle.
 */
Blockly.Blocks['simple_draw_rectangle'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendValueInput('x')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('Rectangle (x,'));
    this.appendValueInput('y')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('y,');
    this.appendValueInput('width')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('width,'));
    this.appendValueInput('height')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('height,'));
    this.appendValueInput('fillColor')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('color,'));
    this.appendValueInput('borderColor')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('border_color,'));
    this.appendValueInput('borderSize')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('border_size)'));
    this.setPreviousStatement(true, ['Number', 'String']);
    this.setNextStatement(true, ['Number', 'String']);
    this.setTooltip(i18t('Draws an rectangle on the screen.'));
  },
};


/**
 * Draw line.
 */
Blockly.Blocks['simple_draw_line'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendValueInput('start_x')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('Line (start x,'));
    this.appendValueInput('start_y')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('start y,'));
    this.appendValueInput('end_x')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('end x,'));
    this.appendValueInput('end_y')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('end y,'));
    this.appendValueInput('fillColor')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('color,'));
    this.appendValueInput('borderSize')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('border_size)'));
    this.setPreviousStatement(true, ['Number', 'String']);
    this.setNextStatement(true, ['Number', 'String']);
    this.setTooltip(i18t('Draws an line on the screen.'));
  },
};


/**
 * Draw point.
 */
Blockly.Blocks['simple_draw_point'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendValueInput('x')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('Point (x,'));
    this.appendValueInput('y')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('y,');
    this.appendValueInput('fillColor')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('color,'));
    this.appendValueInput('borderSize')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('border_size)'));
    this.setPreviousStatement(true, ['Number', 'String']);
    this.setNextStatement(true, ['Number', 'String']);
    this.setTooltip(i18t('Draws an point on the screen.'));
  },
};


/**
 * Draw an ellipse.
 */
Blockly.Blocks['simple_draw_ellipse'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendValueInput('x')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('Ellipse (x,');
    this.appendValueInput('y')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('y,');
    this.appendValueInput('width')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('width,');
    this.appendValueInput('height')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('height,');
    this.appendValueInput('fillColor')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('color,');
    this.appendValueInput('borderColor')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('border_color,');
    this.appendValueInput('borderSize')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('border_size)');
    this.setPreviousStatement(true, ['Number', 'String']);
    this.setNextStatement(true, ['Number', 'String']);
    this.setTooltip(i18t('Draws an ellipse on the screen.'));
  },
};


/**
 * Draw triangle.
 */
Blockly.Blocks['simple_draw_triangle'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendValueInput('x1')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('Triangle (x1,'));
    this.appendValueInput('y1')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('y1,');
    this.appendValueInput('x2')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('x2,');
    this.appendValueInput('y2')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('y2,');
    this.appendValueInput('x3')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('x3,');
    this.appendValueInput('y3')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('y3,');
    this.appendValueInput('fillColor')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('color,'));
    this.appendValueInput('borderColor')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('border_color,'));
    this.appendValueInput('borderSize')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('border_size)'));
    this.setPreviousStatement(true, ['Number', 'String']);
    this.setNextStatement(true, ['Number', 'String']);
    this.setTooltip(i18t('Draws and triangle on the screen.'));
  },
};


/**
 * Draw text.
 */
Blockly.Blocks['simple_draw_text'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendValueInput('text')
      .setCheck('String')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('Text (text,'));
    this.appendValueInput('x')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('x,');
    this.appendValueInput('y')
      .setCheck('Number')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('y,');
    this.appendValueInput('fillColor')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(i18t('color)'));
    this.setPreviousStatement(true, ['Number', 'String']);
    this.setNextStatement(true, ['Number', 'String']);
    this.setTooltip(i18t('Draws an text on the screen.'));
  },
};
